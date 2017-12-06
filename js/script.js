
// TO DO
// - Change numbers to images

'use strict';

let pairs = 0;
let stack = []; // Initiates array of cards

const easy = document.querySelector('.easy');
easy.addEventListener('click', () => {
  pairs = 8;
  createBoard(pairs);
  gameLogic();
});
const medium = document.querySelector('.medium');
medium.addEventListener('click', () => {
  pairs = 10;
  createBoard(pairs);
  gameLogic();
});
const hard = document.querySelector('.hard');
hard.addEventListener('click', () => {
  pairs = 12;
  createBoard(pairs);
  gameLogic();
});

// RESET BUTTON
const reset = document.querySelectorAll('.reset');

reset.forEach(button => {
  button.addEventListener('click', () => {
    resetBoard();
    createBoard(stack);
    gameLogic();
  });
});
