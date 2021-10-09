import Avatar from "./avatar.js";
import Arrow from "./arrow.js";

export default class Game {
    constructor() {
        this.arrow = [];
        this.avatar = [];
        this.BG_COLOR = "#bf75be";
        this.DIM_X = 900;
        this.DIM_X = 630;
    }

    draw(ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect = (0, 0, this.DIM_X, this.DIM_Y);
    }

    createArrow() {
        this.arrow.push(new LeftArrow());
        this.arrow.push(new RightArrow());
        this.arrow.push(new UpArrow());
        this.arrow.push(new DownArrow());
    }

    addArrow() {
        // const leftArrow = new LeftArrow();
        // const upArrow = new UpArrow();
        // const downArrow = new DownArrow();
        // const rightArrow = new RightArrow();
    }

    randomArrow() {
        let randomArrow = this.arrow[Math.floor(Math.random() * this.arrow.length)];
    }

    drawScore() {

    }

    checkCollision() {

    }
}