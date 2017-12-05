
/*
* Shuffles an array
*
* @param array
* @returns newArray
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
* Creates card div with data-number
*/
const createCard = (card) => {
  const cardDiv = `<div class="card" data-number=${card}>
                    <h1>${card}
                  </div>`;
  document.querySelector('.board').innerHTML += cardDiv; // Create cardDiv for each card
};
