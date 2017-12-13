/*
* Shuffles stack and creates card div for each item in stack array
*
* @param {array} array
*/
const createBoard = (pairs) => {
  for(let i=0; i<pairs; i++){   // Adds duplicates for each card in stack
    stack.push(i, i);
  };

  const shuffledStack = shuffle(stack); // Shuffles stack

  shuffledStack.forEach(card => {
    const cardDiv = `<div class="card" data-number=${card}></div>`;
    document.querySelector('.board').innerHTML += cardDiv; // Insert div into .board container
  });

  document.querySelector('.start').classList.remove('visible');
  const resetButton = document.querySelector('body > button');
  if (resetButton.classList.contains('invisible')){
    resetButton.classList.remove('invisible');
  };
};

/*
* Game Logic
* Adds event listener to cards and compares clicked cards to see if they match
*/
// GAME LOGIC
const gameLogic = () => {
  const cards = document.querySelectorAll('.card'); // Creates array of cardDivs

  let clickArray = [];
  let matchArray = [];
  let matchCounter = 0;
  let clickCounter = 0;

  cards.forEach((card) => {     // Adds EventListener for each cardDiv
    card.addEventListener('click', (event) => {
      event.target.classList.add('animation');
      setTimeout(() => {event.target.classList.add('clicked');}, 200); // Flips card
      clickArray.push(event.target.dataset.number); // Adds data number to array
      matchArray.push(card);
      clickCounter++;

      if (clickArray.length === 2) { // Compare logic
        document.querySelector('body').classList.toggle('pointerNone');
        if (clickArray[0] === clickArray[1]){ // If cards data number match
          clickArray = [];
          matchArray = [];
          matchCounter++;
        } else {
          setTimeout(()=> {
            matchArray[0].classList.remove('clicked');
            matchArray[0].classList.remove('animation');
            matchArray[1].classList.remove('clicked');
            matchArray[1].classList.remove('animation');
            clickArray = [];
            matchArray = [];
          }, 800);
        };
        setTimeout(() => {
          document.querySelector('body').classList.toggle('pointerNone');
        }, 800);
      };

      if (matchCounter === pairs) {
        document.querySelector('.complete h2').textContent = `You cleared the game with ${clickCounter/2} tries!`;
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
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
};


/*
* Resets board and matchCounter
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
  // Reset the matchCounter
  matchCounter = 0;
};
