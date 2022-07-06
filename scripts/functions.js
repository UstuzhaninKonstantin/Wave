import { allObjects, canvas, ctx } from "./constants.js";


function drawObjects() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let arr of Object.values(allObjects)) {
        for (let elem of arr) {
            elem.draw();
        }
    }
}

function updateObjects() {
    for (let arr of Object.values(allObjects)) {
        for (let elem of arr) {
            elem.update();
        }
    }
}

function moveObjects(x, y) {
    for (let elem of Object.values(allObjects['blocks'])) {
        elem.x += x;
        elem.y += y;
    }
}

/* принимает на вход цвет(в hex) и значение,
после чего возвращает затемненный или освятленный цвет */
function LightenDarkenColor(col, amt) {
    let usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    let num = parseInt(col, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
    let g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

export { drawObjects, updateObjects, moveObjects, LightenDarkenColor }