'use strict';


const pairs = 8;
const stack = [0]; // Initiates array of cards

for(let i=1; i<pairs*2; i++){   // Adds index for each card in stack
  stack.push(i);
};



stack.forEach((card)=> {
  const cardDiv = `<div class="container"><div class="card">${card}</div></div>`;
  document.querySelector('.board').innerHTML += cardDiv; // Create cardDiv for each card
  const cards = document.querySelectorAll('.container'); // Creates array of cardDivs
  cards.forEach((card, index) => {     // Adds EventListener for each cardDiv
    card.addEventListener('click', (event) => {
      event.target.classList.toggle('flipped'); // Flips card
      console.log(index);
    });
  });
});
