// ALL logic for HUMAN tic tac toe gameplay
import { winLoseDraw, winningRows, letterChecker, fillTile } from "./tic-tac-toe.js";

// FUNCTION FOR HUMAN GAMEPLAY
export function humansGameFunc(state) {
    console.log(`Selected gamemode: ${state.gameMode}`);
    gameboardArea.style.display = 'grid'; // Reveal gameboard now
    state.gameOn = true; // Game is on!
    // get every tile by class
    let tiles = document.getElementsByClassName('clickable');
    let tiles_list = Array.from(tiles); // Convert the tiles stuff into an array, since the above is just an html collection that cant be fully worked with
    let letter_tuple = letterChecker(state.currentTurn);
    let currentLetterText = letter_tuple[0];
    let letter_id = letter_tuple[1];
    const whosTurnDiv = document.getElementById('whosTurn');
    whosTurnDiv.innerHTML = currentLetterText; // Fill that div with this letter text
    // Set div color based on whos turn it is
    if (state.currentTurn % 2 == 0) {
        whosTurnDiv.style.backgroundColor = 'red';
    }
    else {
        whosTurnDiv.style.backgroundColor = 'blue';
    };
    // Have each tile fill on click, and increase the turns and change everything
    tiles_list.forEach((tile) => {
        tile.addEventListener('click', () => {
            // Log for debugging purposes
            let tile_num = tile.dataset.tile;
            console.log(`The tile with tile number ${tile_num} was clicked.`);
            // Do our function that fills that tile, and ADD FILLED CLASS TO our tile, but ONLY if it ISNT already filled
            if (tile.classList.contains('filled')) {
                console.log(`You may not click on tile ${tile_num}. It is filled!`);
                state.errorSound.play();
            }
            else {
                fillTile(letter_id, tile);
                tile.classList.add('filled');
                state.currentTurn += 1
            }
            // Adjust text below
            letter_tuple = letterChecker(state.currentTurn);
            currentLetterText = letter_tuple[0];
            letter_id = letter_tuple[1];
            const whosTurnDiv = document.getElementById('whosTurn');
            whosTurnDiv.innerHTML = currentLetterText; // Fill that div with this letter text
            // color based on turn if statement
            if (state.currentTurn % 2 == 0) {
                whosTurnDiv.style.backgroundColor = 'red';
            }
            else {
                whosTurnDiv.style.backgroundColor = 'blue';
            };
            // Check if there's a winner after every tile click
            winLoseDraw(tiles, winningRows, whosTurnDiv);
        });
    });
}