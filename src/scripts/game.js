import Avatar from "./avatar.js";
import Arrow from "./arrows/arrow.js";

export default class Game {
    constructor() {
        this.arrows = [];
        this.avatar = [];
        this.BG_COLOR = "#e6c7f0";
        this.width = 900;
        this.height = 630;
    }

    draw(ctx) {
        ctx.fillStyle = this.BG_COLOR;
        ctx.fillRect(0, 0, this.width, this.height);
        let that = this;
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 400, 0);
        };
        img.src = "../imgs/disco-ball.png";
    }

    // update(deltaTime) {
    //     for (let arrow of this.arrows) {
    //         arrow.move(deltaTime);
    //     }
    // }

    // animate() {
    //     this.#addArrow();
        
    //     requestAnimationFrame(this.animate.bind(this));
    // }

    #addAvatar() {
        
    }

    #addArrow() {
        let left = new Arrow(300, 0);
        let up = new Arrow(383.33, 0);
        let down = new Arrow(466.67, 0);
        let right = new Arrow(550, 0);
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