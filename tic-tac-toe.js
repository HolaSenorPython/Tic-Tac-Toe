// This file is the main file containing my tic tac toe logic.
import { humansGameFunc } from "./humans.js"; // Import the human game function logic from that file to use here!
import { easyAIMode, mediumAIMode, hardAIMode } from "./ai.js"; // Import different AI levels/modes from AI js
// Stuff for humans.js
const state = {
    currentTurn: 0,
    gameOn: null,
    gameMode: null,
    errorSound: document.getElementById('error'),
}
// Button constants
const easyBtn = document.getElementById('easyBtn');
const mediumBtn = document.getElementById('mediumBtn');
const hardBtn = document.getElementById('hardBtn');
// Audio constants
const penelopeAudio = document.getElementById('penelopeCharmosa');
const yaySound = document.getElementById('yaySound');
const animeWow = document.getElementById('animeWow');
const boringSound = document.getElementById('boringSound');
// Game logic constants
const gameboardArea = document.getElementById('gameboardArea');
const gamemodeArea = document.getElementById('readyOrNot');
const winningRows = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// Hide gameboard before anything, shouldnt be visible before user stuff
gameboardArea.style.display = 'none';

// Loop and handle penelope audio on page click
document.body.addEventListener('click', () => {
    penelopeAudio.volume = 0.5; // 50% of og volume
    penelopeAudio.loop = true;
    penelopeAudio.play();
})

let validAnswers = ["yes", "no"];
// Now let's make functions depending on gamemode type.
let userDecision = prompt("Would you like to play against AI? Type 'yes' or 'no'.");
// No answer logic
while (userDecision === null || userDecision.trim() === "" || !validAnswers.includes(userDecision)) {
    userDecision = prompt("Please answer either 'yes' or 'no'.");
}
if (userDecision.toLowerCase() === 'yes') {
    state.gameMode = 'AI';
}
else if (userDecision.toLowerCase() === 'no') {
    state.gameMode = 'human';
    hideStuff();
    humansGameFunc(state);
};

// function that checks the id of the button passed in, and returns something based on it
function buttonIdCheck(button) {
    let buttonId = button.id;
    if (buttonId == 'easyBtn') {
        return 'easyBtn';
    }
    else if (buttonId == 'mediumBtn') {
        return 'mediumBtn';
    }
    else if (buttonId == 'hardBtn') {
        return 'hardBtn';
    }
};

// Function to decide who's turn
function letterChecker(turns_elapsed) {
    if (turns_elapsed % 2 == 0) { // If its an even turn number
        return ["X's turn.", 0] // Its X
    }
    else
        return ["O's turn.", 1] // Otherwise O
}

// Function that hides the other stuff when user chooses gamemode
function hideStuff() {
    let welcomeArea = document.getElementById('welcomeArea');
    welcomeArea.style.display = 'none'; // Set the display equal to none. It still exists, but its hidden and takes up NO SPACE
    gamemodeArea.style.display = 'none'; // Set the display equal to none. It still exists, but its hidden and takes up NO SPACE
}

// Function that fills up a tile on click (the current tile is a div)
function fillTile(letter_id, current_tile) {
    if (letter_id == 0) {
        const tile_img = document.createElement('img');
        tile_img.src = 'images/x.png';
        tile_img.width = '100';
        tile_img.height = '100';
        current_tile.id = 'x';
        current_tile.appendChild(tile_img); // Append img to tile
    }
    else {
        const tile_img = document.createElement('img');
        tile_img.src = 'images/o.png';
        tile_img.width = '100';
        tile_img.height = '100';
        current_tile.id = 'o';
        current_tile.appendChild(tile_img); // Append img to tile
    }
}

// Function that looks at all tiles and decides a winner
function winLoseDraw(all_tiles, winning_rows, turn_div) {
    all_tiles = Array.from(all_tiles);
    // Grab all the filled tiles
    var filled_tiles = [];
    all_tiles.forEach((tile) => {
        if (tile.classList.contains('filled')) {
            filled_tiles.push(tile);
        };
    });
    var x_nums = []
    var o_nums = []
    // Lets get all the filled tiles associated with each letter
    filled_tiles.forEach((filled_tile) => {
        var filled_tile_num = Number(filled_tile.dataset.tile); // Get the num associated with that tile
        var filled_tile_ltr = filled_tile.id; // letter is stored in id
        if (filled_tile_ltr == 'o') {
            o_nums.push(filled_tile_num);
        }
        else if (filled_tile_ltr == 'x') {
            x_nums.push(filled_tile_num);
        };
    });
    var final_x_list = [x_nums, 'x'];
    var final_o_list = [o_nums, 'o'];
    console.log(`Current X list: ${final_x_list}\nCurrent O list: ${final_o_list}`);
    // Check against this variable for later!
    let winnerFound = false;

    // Now lets check if any of them are a hit!
    for (const winningRow of winningRows) {
        let winningNumOne = winningRow[0];
        let winningNumTwo = winningRow[1];
        let winningNumThree = winningRow[2];
        // If 'X' wins
        if (final_x_list[0].includes(winningNumOne) && final_x_list[0].includes(winningNumTwo) && final_x_list[0].includes(winningNumThree)) {
            winnerFound = true;
            state.gameOn = false; // End game
            yaySound.play();
            var tiles_list = all_tiles;
            tiles_list.forEach((tile) => { // Make the tiles unclickable to avoid griefing
                tile.style.pointerEvents = 'none';
            });
            turn_div.style.backgroundColor = 'red';
            turn_div.style.fontSize = '50px';
            turn_div.innerHTML = "Player 'X' has won the game!🫵<br>Refresh to play again."
        }
        // If 'O' wins
        else if (final_o_list[0].includes(winningNumOne) && final_o_list[0].includes(winningNumTwo) && final_o_list[0].includes(winningNumThree)) {
            winnerFound = true;
            state.gameOn = false;
            animeWow.play();
            var tiles_list = all_tiles;
            tiles_list.forEach((tile) => { // Make the tiles unclickable to avoid griefing
                tile.style.pointerEvents = 'none';
            });
            turn_div.style.backgroundColor = 'blue';
            turn_div.style.fontSize = '50px';
            turn_div.innerHTML = "Player 'O' has won the game!🤯<br>Refresh to play again."
        };
    }
    // IF there is NO WINNER found and there are 9 filled tiles, its a draw.
    if (!winnerFound && filled_tiles.length === 9) {
        state.gameOn = false;
        boringSound.play();
        var tiles_list = all_tiles;
        tiles_list.forEach((tile) => { // Make the tiles unclickable to avoid griefing
            tile.style.pointerEvents = 'none';
        });
        turn_div.style.backgroundColor = 'purple';
        turn_div.style.fontSize = '50px';
        turn_div.innerHTML = "It's a draw!🤝<br>Refresh to play again.";
    };
}

// And now add event listeners to all three buttons, which do that check on click
easyBtn.addEventListener('click', () => {
    let buttonId = buttonIdCheck(easyBtn);
    hideStuff();
    easyAIMode(state, buttonId);
});

mediumBtn.addEventListener('click', () => {
    let buttonId = buttonIdCheck(mediumBtn);
    hideStuff();
    mediumAIMode(state, buttonId);
});

hardBtn.addEventListener('click', () => {
    let buttonId = buttonIdCheck(hardBtn);
    hideStuff();
    hardAIMode(state, buttonId);
});

// Export all variables for human js and ai js
export { winningRows, winLoseDraw, letterChecker, fillTile, state, gameboardArea }
