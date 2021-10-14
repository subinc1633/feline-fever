export default class Arrow { 
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.speed = 4;
        this.dir = dir;
        this.deletion = false;
    }

    draw(ctx) {
        if (this.dir === "left") {
            const leftArrow = document.getElementById("leftArrow");
            ctx.drawImage(leftArrow, this.x, this.y);
        } else if (this.dir === "up") {
            const upArrow = document.getElementById("upArrow");
            ctx.drawImage(upArrow, this.x, this.y);
        } else if (this.dir === "down") {
            const downArrow = document.getElementById("downArrow");
            ctx.drawImage(downArrow, this.x, this.y);
        } else if (this.dir === "right") {
            const rightArrow = document.getElementById("rightArrow");
            ctx.drawImage(rightArrow, this.x, this.y);
        }
    }

    move() {
        let leftRight = (this.dir === "left" || this.dir === "right");
        let upDown = (this.dir === "up" || this.dir === "down");

        if (leftRight && this.y < 530 || upDown && this.y < 530) {
            this.y += this.speed;
        } else {
            this.deletion = true;
        }
    }
}