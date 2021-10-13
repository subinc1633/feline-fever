export default class Arrow { 
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.speed = 0.2511;
        this.dir = dir;
        this.deletion = false;
        this.image = null;
    }

    draw(ctx) {
        if (this.dir === "left") {
            this.image = leftArrow;
            ctx.drawImage(leftArrow, this.x, this.y);
        } else if (this.dir === "up") {
            this.image = upArrow;
            ctx.drawImage(upArrow, this.x, this.y);
        } else if (this.dir === "down") {
            this.image = downArrow;
            ctx.drawImage(downArrow, this.x, this.y);
        } else if (this.dir === "right") {
            this.image = rightArrow;
            ctx.drawImage(rightArrow, this.x, this.y);
        }
    }

    move(deltaTime) {
        let leftRight = (this.dir === "left" || this.dir === "right");
        let upDown = (this.dir === "up" || this.dir === "down");

        if (leftRight && this.y < 530 || upDown && this.y < 530) {
            this.y += this.speed * deltaTime;
        }
    }
}