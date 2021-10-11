import Avatar from "./avatar.js";
import Arrow from "./arrows/arrow.js";

export default class Game {
    constructor() {
        this.arrows = [];
        this.avatar = [];
        this.width = 900;
        this.height = 630;
        this.#addArrow();
    }

    draw(ctx) {
        for (let arrow of this.arrows) {
            arrow.draw(ctx);
        }
    }

    update(ctx) {
        for (let arrow of this.arrows) {
            arrow.move(ctx);
        }
    }

    #addAvatar() {
        
    }

    #addArrow() {
        let left = new Arrow(255, -100, "left");
        let up = new Arrow(365, -100, "up");
        let down = new Arrow(482, -100, "down");
        let right = new Arrow(588, -100, "right");

        this.arrows.push(left, up, down, right);
    }

    #randomArrow(ctx) {
        let rand = this.arrow[Math.floor(Math.random() * this.arrow.length)];
        
    }

    drawScore() {

    }

    checkCollision() {

    }

    
}