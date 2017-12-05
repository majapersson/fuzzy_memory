
// 6. When all cards are flipped, game is over
// 7. Add reset button to reset all cards to unflipped and shuffle the board

// OPTIONAL
// - Add difficulty (8, 10 or 12 pairs)

'use strict';


const pairs = 8;
const stack = []; // Initiates array of cards

for(let i=0; i<pairs; i++){   // Adds duplicates for each card in stack
  stack.push(i, i);
};

createBoard();

const cards = document.querySelectorAll('.card'); // Creates array of cardDivs

let clickArray = [];
let matchArray = [];
let counter = 0;

cards.forEach((card) => {     // Adds EventListener for each cardDiv
  card.addEventListener('click', (event) => {
    event.target.classList.add('clicked'); // Flips card
    clickArray.push(event.target.dataset.number); // Adds data number to array
    matchArray.push(card);

    if (clickArray.length === 2) {
      if (clickArray[0] === clickArray[1]){ // If cards data number match
        console.log('Match found!');
        matchArray[0].classList.add('matched');
        matchArray[0].classList.remove('clicked');
        matchArray[1].classList.add('matched');
        matchArray[1].classList.remove('clicked');
        clickArray = [];
        matchArray = [];
        counter++;
        console.log(counter);
      } else {
        setTimeout(()=> {
        console.log('Match not found...');
        matchArray[0].classList.remove('clicked');
        matchArray[1].classList.remove('clicked');
        clickArray = [];
        matchArray = [];
        }, 800);
      }
    };

    if (counter === pairs) {
      document.querySelector('.complete').classList.add('visible');
    }

  });
});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    resetBoard();
  });
});
