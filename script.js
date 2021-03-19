'use strict';

const keyPressed = (event) => {
    const keyCode = document.querySelector('.keycode');
    const message = document.querySelector('.message');
    const txtKey = document.querySelector('.event-key');
    const txtWhich = document.querySelector('.event-which');
    const txtKeyCode = document.querySelector('.event-keycode');
    const cardContainer = document.querySelector('.card-container')
    drawNumberToCanvas(event.keyCode);
    keyCode.classList.remove('hidden');
    cardContainer.classList.remove('hidden');
    message.classList.add('hidden');
    keyCode.textContent = event.keyCode;
    txtKeyCode.textContent = event.keyCode;
    txtKey.textContent = event.key;
    txtWhich.textContent = event.which;


}



/*Credit to @wesbos
change keycode to image and push it to favicon
*/
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.font = '110px sans-serif';

const drawNumberToCanvas = (number) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillText(number, canvas.width / 2, canvas.height / 2, canvas.width);
    const data = canvas.toDataURL('image/png');
    const link = document.querySelector("link[rel*='icon']");
    link.type = 'image/x-icon';
    link.href = data;
  }

document.addEventListener('keydown',keyPressed)