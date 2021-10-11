import LeftArrow from "./left_arrow.js"
import UpArrow from "./up_arrow.js"
import DownArrow from "./down_arrow.js"
import RightArrow from "./right_arrow.js"

const PROPERTIES = {
    SIZE: 50,
    SPEED: 5
};

export default class Arrow { 
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = PROPERTIES.SIZE;
        this.speed = PROPERTIES.SPEED;
        this.url = "";
    }

    draw(ctx) {
        const img = new Image();
        img.onload = function () {
            ctx.drawImage(img, this.x, this.y);
        };
        img.src = this.url;
    }

    move() {
        this.y += this.speed;
    }

    animate(ctx, url) {
        this.update();
        this.draw(ctx, url);
    }
}