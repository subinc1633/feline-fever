import Avatar from "./avatar.js";
import Arrow from "./arrow.js";
import Splash from "./splash.js"

export default class Game {
    constructor() {
        this.arrow = [];
        this.avatar = [];
        this.BG_COLOR = "#bf75be";
    }

    draw(ctx) {
        ctx.fillRect = (0, 0, 200, 400);
        ctx.fillStyle = "#ffffff";
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

    drawScore() {

    }

    checkCollision() {

    }
}