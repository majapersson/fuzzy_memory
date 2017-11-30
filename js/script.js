// 1. Create array of cards
// 1b. Shuffle array
// 2. Loop through array and print out cardDivs
// 3. Add event listener to cards
// 4. Make sure you only can click 2 cards
// 5. If clicked cards have the same number, leave them flipped
//    else flip them back
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

const shuffledStack = shuffle(stack); // Shuffles stack

shuffledStack.forEach((card)=> {
  const cardDiv = `<div class="container" data-number=${card}><div class="card"></div></div>`;
  document.querySelector('.board').innerHTML += cardDiv; // Create cardDiv for each card
});

const cards = document.querySelectorAll('.container'); // Creates array of cardDivs

cards.forEach((card) => {     // Adds EventListener for each cardDiv
  card.addEventListener('click', (event) => {
    event.target.classList.toggle('flipped'); // Flips card
    console.log(card.dataset.number);
  });
});
