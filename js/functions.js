/*
* Shuffles stack and creates card div for each item in stack array
*
* @param {array} array
*/
const createBoard = (array) => {
  const shuffledStack = shuffle(array); // Shuffles stack

  shuffledStack.forEach(card => {
    const cardDiv = `<div class="card" data-number=${card}><h1>${card}</div>`;
    document.querySelector('.board').innerHTML += cardDiv; // Insert div into .board container
  });
};

// GAME LOGIC
const gameLogic = () => {
  const cards = document.querySelectorAll('.card'); // Creates array of cardDivs

  let clickArray = [];
  let matchArray = [];
  let counter = 0;

  console.log('Hello gamer!');

  cards.forEach((card) => {     // Adds EventListener for each cardDiv
    card.addEventListener('click', (event) => {
      event.target.classList.add('clicked'); // Flips card
      clickArray.push(event.target.dataset.number); // Adds data number to array
      matchArray.push(card);

      if (clickArray.length === 2) { // Compare logic
        if (clickArray[0] === clickArray[1]){ // If cards data number match
          clickArray = [];
          matchArray = [];
          counter++;
        } else {
          setTimeout(()=> {
          matchArray[0].classList.remove('clicked');
          matchArray[1].classList.remove('clicked');
          clickArray = [];
          matchArray = [];
          }, 800);
        };
      };

      if (counter === pairs) {
        document.querySelector('.complete').classList.add('visible');
      };

    });
  });
};
// END GAME LOGIC


/*
* Shuffles an array
*
* @param {array} array
* @returns {array} newArray
*/
const shuffle = (array) => {
  const newArray = [];
  array.forEach(item => {
    const index = Math.floor(Math.random() * array.length | 0);
    newArray.splice(index, 0, item);
  });
  return newArray;
};


/*
* Resets board and counter
*/
const resetBoard = () => {
  // Remove class clicked
  const clicked = document.querySelectorAll('.clicked');
  clicked.forEach(card => {
    card.classList.remove('clicked');
  });
  // Clear board
  document.querySelector('.board').innerHTML = '';
  // Remove game over div
  document.querySelector('.complete').classList.remove('visible');
  // Reset the counter
  counter = 0;
};
