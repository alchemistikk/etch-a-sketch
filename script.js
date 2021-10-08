/* OUTPUT
    
 */

/* GUI
    - grid total area must remain the same which means i'll have to change
    the 6.25% css to something that makes it 1 / grid size
 */
const container = document.querySelector('#container');
let gridSize = (16 * 16);
const button = document.createElement('button');
button.textContent = 'Reset Grid';
container.appendChild(button);

button.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.style.background = 'white';
  });

  let newGridSize = prompt('Enter New Grid Size', '10');
  while (newGridSize > 100) {
    newGridSize = prompt('Enter a New Grid Size 100 or less', '10');
  }
  gridSize = Number(newGridSize);
  console.log(gridSize);

  const gridContainer = document.querySelector("#gridContainer");
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }

  for (let i = 0; i < (gridSize * gridSize); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.flexBasis = `${(1 / gridSize) * 100}%`;
    gridContainer.appendChild(square);
  }

  const newSquares = document.querySelectorAll('.square');
  newSquares.forEach(square => {
    square.addEventListener('mouseenter', () => {
      square.style.background = 'blue';
    });
  });
});

const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'gridContainer');
container.appendChild(gridContainer);

for (let i = 0; i < gridSize; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  gridContainer.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.style.flexBasis = `${(1 / 16) * 100}%`;
  square.addEventListener('mouseenter', () => {
    square.style.background = 'blue';
  });
})

