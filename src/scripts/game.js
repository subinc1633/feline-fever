import Avatar from "./avatar.js";
import Arrow from "./arrow.js";

export default class Game {
    constructor() {
        this.arrow = [];
        this.avatar = [];
        this.BG_COLOR = "#bf75be";
        this.DIM_X = 900;
        // debugger
        this.DIM_X = 630;
        // debugger
    }

    draw(ctx) {
        ctx.fillStyle = "#ffffff";
        // debugger
        ctx.fillRect = (0, 0, this.DIM_X, this.DIM_Y);
        // debugger
    }

    addArrow() {
        // const leftArrow = new Arrow();
        // const upArrow = new Arrow();
        // const downArrow = new Arrow();
        // const rightArrow = new Arrow();
    }

    randomArrow() {
        let randomArrow = this.arrow[Math.floor(Math.random() * this.arrow.length)];
    }

    drawScore() {

    }

    checkCollision() {

    }
}