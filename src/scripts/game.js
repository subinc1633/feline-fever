import Avatar from "./avatar.js";
import Arrow from "./arrow.js";

export default class Game {
    constructor() {
        this.arrow = [];
        this.avatar = [];
        this.BG_COLOR = "#e6c7f0";
        this.DIM_X = 900;
        this.DIM_Y = 630;
    }

    draw(ctx) {
        ctx.fillStyle = this.BG_COLOR;
        ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
    }

    createArrow() {
        let newArrow = new Arrow();
        this.arrow.push(newArrow);
    }

    randomArrow() {
        let rand = this.arrow[Math.floor(Math.random() * this.arrow.length)];
    }

    drawScore() {

    }

    checkCollision() {

    }
}