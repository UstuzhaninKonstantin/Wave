import { keydownCheck, keyupCheck, canvas, allObjects } from "./constants.js";
import { Wave } from "./wave.js";
import { Block } from "./block.js";
import { drawObjects, updateObjects } from "./functions.js";


allObjects['wave'].push(new Wave(20, 20, '#000000', 10, 6));
allObjects['blocks'].push(new Block(2000, 600, 30, 30, '#ff33aa'))


function main() {
    if (!canvas.getContext) {
        return;
    }
    document.addEventListener('keydown', keydownCheck);
    document.addEventListener('keyup', keyupCheck);
    setInterval(() => {
        drawObjects();
        updateObjects()
    }, 1000 / 60);
}

main();