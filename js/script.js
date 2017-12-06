
// TO DO
// - Change numbers to images
// - Fix start screen (with innerHTML-function)

// OPTIONAL
// - Add difficulty (8, 10 or 12 pairs)


'use strict';


const pairs = 8;
let stack = []; // Initiates array of cards

for(let i=0; i<pairs; i++){   // Adds duplicates for each card in stack
  stack.push(i, i);
};

// CREATE BOARD
createBoard(stack);
gameLogic();

// RESET BUTTON
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    resetBoard();
    createBoard(stack);
    gameLogic();
  });
});
