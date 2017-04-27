import sayHi from './sayHi';
import Space from './space';

document.getElementById('say').addEventListener('click', sayHi, false);

document.getElementById('calcBtn').addEventListener('click', () => {
  let x = document.getElementById('x').value;
  let y = document.getElementById('y').value;
  let z = document.getElementById('z').value;
  let space = new Space(x, y, z);
  document.getElementById('volumeEqual').innerHTML = space.volume;
});


function config() {
  let length = document.getElementById('x').value;
  let width = document.getElementById('y').value;

  return {
    length,
    width
  }
}

let {length, width} = config();

document.getElementById('calcBtn').addEventListener('click', () => {
  document.getElementById('square').innerHTML = length * width;
});
