import Avatar from "./avatar.js";
import Arrow from "./arrow.js";

class Game {
    constructor() {
        this.arrow = [];
        this.avatar = [];
        this.X_DIM = 900;
        this.Y_DIM = 630;
        this.BG_COLOR = ("#bf75be");
    }

    draw(ctx) {
        ctx.fillStyle = this.BG_COLOR;
        ctx.fill();
    }

    addArrow() {
        const leftArrow = new Arrow();
        const upArrow = new Arrow();
        const downArrow = new Arrow();
        const rightArrow = new Arrow();
    }

    randomArrow() {
        let randomArrow = this.arrow[Math.floor(Math.random() * this.arrow.length)];
    }
}