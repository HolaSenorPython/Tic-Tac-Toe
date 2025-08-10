// Contains ALL JS NECESSARY for AI stuff.
import { winLoseDraw, winningRows, letterChecker, fillTile } from "./tic-tac-toe.js";

// AI player function
function getAIMove(available_tiles) {
    let lengthFreeTiles = available_tiles.length;
    let randomTileIndex = Math.floor(Math.random() * lengthFreeTiles);
    let tileInQuestion = available_tiles[randomTileIndex];
    console.log(`Debug note: Random tile chosen by AI: ${tileInQuestion.dataset.tile}`);
    return tileInQuestion; // Return the tile in question
}

// Get ai move function (medium mode)
function getAIMoveMedium(available_tiles, winning_rows, filled_tiles) {
    var missingTile = null;
    let availableTilesVar = available_tiles;
    // Grab All the filled tiles by the AI (player "o")
    let aiFilledtiles = [];
    let humanFilledTiles = [];
    filled_tiles.forEach((filledTile) => {
        if (filledTile.id == 'o') {
            aiFilledtiles.push(Number(filledTile.dataset.tile));
        }
        else {
            humanFilledTiles.push(Number(filledTile.dataset.tile));
        }
    })
    console.log(`AI filled tiles: ${aiFilledtiles}, Human filled tiles: ${humanFilledTiles}`);
    // Check if the AI is one move away from victory, if so go there
    for (const winningRow of winning_rows) {
        let winningNumOne = winningRow[0];
        let winningNumTwo = winningRow[1];
        let winningNumThree = winningRow[2];
        if (aiFilledtiles.includes(winningNumOne) && aiFilledtiles.includes(winningNumTwo)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumThree) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        }
        else if (aiFilledtiles.includes(winningNumTwo) && aiFilledtiles.includes(winningNumThree)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumOne) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        }
        else if (aiFilledtiles.includes(winningNumOne) && aiFilledtiles.includes(winningNumThree)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumTwo) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        }
    };
    // NOW check if the HUMAN is one move away from victory, if so BLOCK
    for (const winningRow of winning_rows) {
        let winningNumOne = winningRow[0];
        let winningNumTwo = winningRow[1];
        let winningNumThree = winningRow[2];
        if (humanFilledTiles.includes(winningNumOne) && humanFilledTiles.includes(winningNumTwo)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumThree) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        }
        else if (humanFilledTiles.includes(winningNumTwo) && humanFilledTiles.includes(winningNumThree)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumOne) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        }
        else if (humanFilledTiles.includes(winningNumOne) && humanFilledTiles.includes(winningNumThree)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumTwo) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        };
    }
    // Now if MISSING TILE is null, then NONE of the conditionals above were true, so we will return a random tile
    if (!missingTile) {
        console.log(`No special tile needed. Computer will go somewhere random.`);
        missingTile = getAIMove(availableTilesVar);
        return missingTile;
    };
}

// Get AI move for hard function
function getAIMoveHard(available_tiles, winning_rows, filled_tiles) {
    var missingTile = null;
    let availableTilesVar = available_tiles;
    // Grab All the filled tiles by the AI (player "o")
    let aiFilledtiles = [];
    let humanFilledTiles = [];
    filled_tiles.forEach((filledTile) => {
        if (filledTile.id == 'o') {
            aiFilledtiles.push(Number(filledTile.dataset.tile));
        }
        else {
            humanFilledTiles.push(Number(filledTile.dataset.tile));
        }
    })
    console.log(`AI filled tiles: ${aiFilledtiles}, Human filled tiles: ${humanFilledTiles}`);
    // Check if the AI is one move away from victory, if so go there
    for (const winningRow of winning_rows) {
        let winningNumOne = winningRow[0];
        let winningNumTwo = winningRow[1];
        let winningNumThree = winningRow[2];
        if (aiFilledtiles.includes(winningNumOne) && aiFilledtiles.includes(winningNumTwo)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumThree) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        }
        else if (aiFilledtiles.includes(winningNumTwo) && aiFilledtiles.includes(winningNumThree)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumOne) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        }
        else if (aiFilledtiles.includes(winningNumOne) && aiFilledtiles.includes(winningNumThree)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumTwo) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        }
    };
    // NOW check if the HUMAN is one move away from victory, if so BLOCK
    for (const winningRow of winning_rows) {
        let winningNumOne = winningRow[0];
        let winningNumTwo = winningRow[1];
        let winningNumThree = winningRow[2];
        if (humanFilledTiles.includes(winningNumOne) && humanFilledTiles.includes(winningNumTwo)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumThree) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        }
        else if (humanFilledTiles.includes(winningNumTwo) && humanFilledTiles.includes(winningNumThree)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumOne) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        }
        else if (humanFilledTiles.includes(winningNumOne) && humanFilledTiles.includes(winningNumThree)) {
            for (const freeTile of available_tiles) {
                if (Number(freeTile.dataset.tile) == winningNumTwo) {
                    missingTile = freeTile;
                    return missingTile; // return the missing tile
                }
            }
        };
    }
    // Now if NONE of the conditions above are true, go to either the CENTER, or one of the corners
    if (!missingTile) {
        var corners = [0, 2, 6, 8]; // Grab all corners
        var center = 4; // and center
        var availableCorners = []; // Make list of available corners
        var centerFree = false;
        for (const freeTile of available_tiles) { // For every free tile, if its tile value is in the corners list or equal to center, add it to list of free stuff
            if (corners.includes(Number(freeTile.dataset.tile))) {
                availableCorners.push(freeTile.dataset.tile);
            }
            else if (Number(freeTile.dataset.tile) == center) {
                centerFree = true;
            }
        }
        var randomCorner = availableCorners[Math.floor(Math.random() * availableCorners.length)];
        for (const freeTile of available_tiles) { // for every free tile
            if (Number(freeTile.dataset.tile) == center && centerFree) { // If it has the center tile's value, and its free...
                console.log('Filling center tile...');
                missingTile = freeTile;
                return missingTile; // return this free center tile
            }
        };
        for (const freeTile of available_tiles) { // Seperate for loop. It should loop through all and look for corner first. Then look for corners.
            if (Number(freeTile.dataset.tile) == randomCorner) {
                console.log('Filling corner...')
                missingTile = freeTile;
                return missingTile;
            }
        }
        // If no corners or center are free, go somewhere random
        console.log(`No special tile needed. Computer will go somewhere random.`);
        missingTile = getAIMove(availableTilesVar);
        return missingTile;
    };
};

// EASY GAMEPLAY AI FUNCTION.
export function easyAIMode(state, button_id) {
    console.log(`Selected gamemode: ${state.gameMode}, ${button_id}`);
    gameboardArea.style.display = 'grid';
    state.gameOn = true;
    // Get all tiles
    let tiles = document.getElementsByClassName('clickable');
    let tiles_list = Array.from(tiles); // Convert the tiles stuff into an array, since the above is just an html collection that cant be fully worked with
    let letter_tuple = letterChecker(state.currentTurn);
    let currentLetterText = letter_tuple[0];
    let letter_id = letter_tuple[1];
    const whosTurnDiv = document.getElementById('whosTurn');
    whosTurnDiv.innerHTML = currentLetterText; // Fill div with letter text
    // background color handling
    if (state.currentTurn % 2 == 0) {
        whosTurnDiv.style.backgroundColor = 'red';
    }
    else {
        whosTurnDiv.style.backgroundColor = 'blue';
    }
    // Now, game will operate based on whos turn it is
    // Its the human's turn FIRST
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

            // NOW, AI should move
            if (state.currentTurn % 2 != 0) {
                // Notify user the AI is about to move, but only if the game is still going
                if (state.gameOn === true) {
                    whosTurnDiv.style.backgroundColor = 'black';
                    whosTurnDiv.innerHTML = 'The Computer is about to make a move.';
                }
                else {
                    return; // The whole game is in a function, so we can stop the script just like that!
                }
                setTimeout(function() {
                    let availableTiles = [];
                    tiles_list.forEach((tile) => {
                        if (!tile.classList.contains('filled')) {
                            availableTiles.push(tile);
                        }
                    });
                    let aiDesiredTile = getAIMove(availableTiles);
                    // Fill the ai's tile, handle turns, change text, etc.
                    fillTile(letter_id, aiDesiredTile);
                    aiDesiredTile.classList.add('filled');
                    state.currentTurn += 1;
                    // The rest of the comment above ^^
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
                    // Check if there's a winner after every tile fill
                    winLoseDraw(tiles, winningRows, whosTurnDiv);
                }, 1500); // Will execute AI move after 1.5 seconds.
            }
        });
    });
};

// Medium AI function
export function mediumAIMode(state, button_id) {
    console.log(`Selected gamemode: ${state.gameMode}, ${button_id}`);
    gameboardArea.style.display = 'grid';
    state.gameOn = true;
    // Get tiles n stuff
    let tiles = document.getElementsByClassName('clickable');
    let tiles_list = Array.from(tiles); // Convert the tiles stuff into an array, since the above is just an html collection that cant be fully worked with
    let letter_tuple = letterChecker(state.currentTurn);
    let currentLetterText = letter_tuple[0];
    let letter_id = letter_tuple[1];
    const whosTurnDiv = document.getElementById('whosTurn');
    whosTurnDiv.innerHTML = currentLetterText; // Fill div with letter text
    // Set div color based on whos turn it is
    if (state.currentTurn % 2 == 0) {
        whosTurnDiv.style.backgroundColor = 'red';
    }
    else {
        whosTurnDiv.style.backgroundColor = 'blue';
    };
    // Game should operate based on whos turn it is
    // Human first again:
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

            // NOW, AI should move
            if (state.currentTurn % 2 != 0) {
                // Notify user the AI is about to move, but only if the game is still going
                if (state.gameOn === true) {
                    whosTurnDiv.style.backgroundColor = 'black';
                    whosTurnDiv.innerHTML = 'The Computer is about to make a move.';
                }
                else {
                    return; // The whole game is in a function, so we can stop the script just like that!
                }
                setTimeout(function() {
                    let availableTiles = [];
                    let filledTiles = [];
                    tiles_list.forEach((tile) => {
                        if (!tile.classList.contains('filled')) {
                            availableTiles.push(tile);
                        }
                        else {
                            filledTiles.push(tile);
                        }
                    });
                    let aiDesiredTile = getAIMoveMedium(availableTiles, winningRows, filledTiles);
                    // Fill the desired tile and stuff
                    fillTile(letter_id, aiDesiredTile);
                    aiDesiredTile.classList.add('filled');
                    state.currentTurn += 1;
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
                    // Check if there's a winner after every tile fill
                    winLoseDraw(tiles, winningRows, whosTurnDiv);
                }, 1500);
            }
        })
    })
}

// HARD AI function
export function hardAIMode(state, button_id) {
    console.log(`Selected gamemode: ${state.gameMode}, ${button_id}`);
    gameboardArea.style.display = 'grid';
    state.gameOn = true;
    // Get tiles n stuff
    let tiles = document.getElementsByClassName('clickable');
    let tiles_list = Array.from(tiles); // Convert the tiles stuff into an array, since the above is just an html collection that cant be fully worked with
    let letter_tuple = letterChecker(state.currentTurn);
    let currentLetterText = letter_tuple[0];
    let letter_id = letter_tuple[1];
    const whosTurnDiv = document.getElementById('whosTurn');
    whosTurnDiv.innerHTML = currentLetterText; // Fill div with letter text
    // Set div color based on whos turn it is
    if (state.currentTurn % 2 == 0) {
        whosTurnDiv.style.backgroundColor = 'red';
    }
    else {
        whosTurnDiv.style.backgroundColor = 'blue';
    };
    // Game should operate based on whos turn it is
    // Human first again:
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

            // NOW Ai should move
            if (state.currentTurn % 2 != 0) {
                // Notify user the AI is about to move, but only if the game is still going
                if (state.gameOn === true) {
                    whosTurnDiv.style.backgroundColor = 'black';
                    whosTurnDiv.innerHTML = 'The Computer is about to make a move.';
                }
                else {
                    return; // The whole game is in a function, so we can stop the script just like that!
                }
                setTimeout(function() {
                    let availableTiles = [];
                    let filledTiles = [];
                    tiles_list.forEach((tile) => {
                        if (!tile.classList.contains('filled')) {
                            availableTiles.push(tile);
                        }
                        else {
                            filledTiles.push(tile);
                        }
                    });
                    let aiDesiredTile = getAIMoveHard(availableTiles, winningRows, filledTiles);
                    // Fill the desired tile and stuff
                    fillTile(letter_id, aiDesiredTile);
                    aiDesiredTile.classList.add('filled');
                    state.currentTurn += 1;
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
                    // Check if there's a winner after every tile fill
                    winLoseDraw(tiles, winningRows, whosTurnDiv);
                }, 1500);
            };
        });
    });
};