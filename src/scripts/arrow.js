const PROPERTIES = {
    VEL: 5
};

export default class Arrow { 
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.vel = PROPERTIES.VEL;
        this.dir = dir;
        this.url = "";
        this.deletion = false;
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

    move() {
        let leftRight = (this.dir === "left" || this.dir === "right");
        let upDown = (this.dir === "up" || this.dir === "down");

        if (leftRight && this.y < 374 || upDown && this.y < 372) {
            this.y++;
        } else if (leftRight && this.y === 374 || upDown && this.y === 372) {
            this.y = -80;
            this.deletion = true;
        }
    }
}