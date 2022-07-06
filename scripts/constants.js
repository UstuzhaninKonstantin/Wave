/*
constants.js
файл с основными значениями проекта, на которых
он и основан (ctx, canvas и подобное)
*/

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const keysPressed = {};

const ctx = canvas.getContext('2d');
ctx.font = '13px sans-serif';
ctx.textAlign = 'center';

const allObjects = {
    "blocks": [],
    "wave": []
};

/* функция-обработчик нажатия клавиш */
function keydownCheck(event) {
    keysPressed[event.code] = true;
}


/* функция-обработчик отпускания клавиш */
function keyupCheck(event) {
    keysPressed[event.code] = false;
}


export { canvas, ctx, allObjects, keysPressed, keydownCheck, keyupCheck }