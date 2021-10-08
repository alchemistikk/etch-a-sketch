/* OUTPUT
    
 */

/* GUI
    On mouse enter, change background color
 */


const container = document.querySelector('#container');

for (let i = 0; i < (16 * 16); i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('mouseenter', () => {
    square.style.background = 'blue';
  })
})

