import { ctx, canvas, keysPressed, allObjects } from "./constants.js";
import { moveObjects, LightenDarkenColor } from "./functions.js";


class Wave {
    constructor(width, height, color, movingSpeed, gravitySpeed) {
        this.x = canvas.width / 2 - width / 2;
        this.y = canvas.height / 2 - height / 2;
        this.width = width;
        this.height = height;
        this.color = color;
        this.movingSpeed = movingSpeed;
        this.gravitySpeed = gravitySpeed;
        this.alive = true;
    }

    draw() {
        if (this.alive) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = LightenDarkenColor(this.color, -30)
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillText('You died. Press R to respawn', canvas.width / 2, canvas.height / 2);
        }
    }

    update() {
        if (this.alive) {
            if (keysPressed['KeyW'] || keysPressed['ArrowUp'] || keysPressed['Space']) {
                this.y -= this.gravitySpeed;
            } else {
                this.y += this.gravitySpeed;
            }
            moveObjects(-this.movingSpeed, 0);
            this.blocksCollision();
        }
    }

    blocksCollision() {
        for (let block of allObjects['blocks']) {
            if (
                this.x + this.width >= block.x &&
                this.x <= block.x + block.width &&
                this.y + this.height >= block.y &&
                this.y <= block.y + block.height
            ) {
                this.alive = false;
            }
        }
    }


}


export { Wave }