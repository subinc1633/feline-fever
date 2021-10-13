export default class Arrow { 
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.speed = 0.2511;
        this.dir = dir;
        this.deletion = false;
        this.leftArrow = new Image();
        this.upArrow = new Image();
        this.downArrow = new Image();
        this.rightArrow = new Image();
    }

    getImage(ctx, arrowDir, url) {
        arrowDir.src = url;
        arrowDir.onload = () => {
            ctx.drawImage(arrowDir, this.x, this.y);
        }
    }

    draw(ctx) {
        if (this.dir === "left") {
            this.getImage(ctx, this.leftArrow, "../imgs/left-arrow.png");
        } else if (this.dir === "up") {
            this.getImage(ctx, this.upArrow, "../imgs/up-arrow.png");
        } else if (this.dir === "down") {
            this.getImage(ctx, this.downArrow, "../imgs/down-arrow.png");
        } else if (this.dir === "right") {
            this.getImage(ctx, this.rightArrow, "../imgs/right-arrow.png");
        }
    }

    move(deltaTime) {
        let leftRight = (this.dir === "left" || this.dir === "right");
        let upDown = (this.dir === "up" || this.dir === "down");

        if (leftRight && this.y < 3 || upDown && this.y < 530) {
            this.y += this.speed * deltaTime;
        } else {
            console.log("miss");
            this.deletion = true;
        }
    }
}