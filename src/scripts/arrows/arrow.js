const PROPERTIES = {
    SPEED: 5
};

export default class Arrow { 
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.speed = PROPERTIES.SPEED;
        this.dir = dir;
        this.url = "";
    }

    image(ctx) {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, this.x, this.y);
        };
        img.src = this.url;
    }

    draw(ctx) {
        if (this.dir === "left") {
            this.url = "../imgs/left-arrow.png";
            this.image(ctx);
        } else if (this.dir === "up") {
            this.url = "../imgs/up-arrow.png";
            this.image(ctx);
        } else if (this.dir === "down") {
            this.url = "../imgs/down-arrow.png";
            this.image(ctx);
        } else if (this.dir === "right") {
            this.url = "../imgs/right-arrow.png";
            this.image(ctx);
        }
    }

    move() {
        if ((this.dir === "left" || this.dir === "right") && this.y < 374) {
            this.y++;
        } else if ((this.dir === "up" || this.dir === "down") && this.y < 372) {
            this.y++;
        }
    }
}