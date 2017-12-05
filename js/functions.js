/*
* Shuffles stack and creates card div for each item in stack array
*/
const createBoard = () => {
  const shuffledStack = shuffle(stack); // Shuffles stack

  shuffledStack.forEach((card) => {
    const cardDiv = `<div class="card" data-number=${card}><h1>${card}</div>`;
    document.querySelector('.board').innerHTML += cardDiv; // Insert div into .board container
  });
  return shuffledStack;
};

/*
* Shuffles an array
*/
const shuffle = (array) => {
  let newArray = [];
  let n = array.length-1;
  let i;
  while (n >= 0) {
    i = Math.floor(Math.random() * n--);
    newArray.push(array.splice(i, 1)[0]);
  };
  return newArray;
};

/*
* Shuffles the children of board container
*/
const resetBoard = () => {
  const flipped = document.querySelectorAll('.matched');
  flipped.forEach(card => {
    card.classList.remove('matched');
  });

  const complete = document.querySelector('.complete');
  complete.classList.remove('visible');

  const board = document.querySelector('.board');
  for (let i = board.children.length; i >= 0; i--) {
     board.appendChild(board.children[Math.random() * i | 0]);
   };
};
