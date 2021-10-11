import Avatar from "./avatar.js";
import Arrow from "./arrow.js";
import Song from "./song.js";

export default class Game {
    constructor() {
        this.arrows = [];
        this.randomArrows = [];
        this.avatar = [];
        this.arrowInterval = 2000;
        this.arrowTimer = 0;
        this.#addArrow();
        // debugger
    }

    draw(ctx) {
        for (let rand of this.randomArrows) { rand.draw(ctx) };
    }

    update(deltaTime) {
        this.randomArrows = this.randomArrows.filter(arrow => !arrow.deletion);
        console.log(this.randomArrows);
        if (this.arrowTimer > this.arrowInterval) {
            this.#addRandomArrows();
            this.arrowTimer = 0;
            console.log(this.randomArrows);
        } else {
            this.arrowTimer += deltaTime;
        }
        
        for (let rand of this.randomArrows) { rand.move() };
        
    }

    #addAvatar() {
        
    }

    #addArrow() {
        let pos = {
            left: 255,
            up: 365,
            down: 482,
            right: 588
        }

        for (let key in pos) {
            this.arrows.push(new Arrow(pos[key], -80, key));
        }
    }

    #addRandomArrows() {
        let randomIdx = Math.floor(Math.random() * this.arrows.length)
        // let randomArrow = this.arrows[Math.floor(Math.random() * this.arrows.length)];
        this.randomArrows.push(this.arrows[randomIdx]);
    }

    drawScore() {

    }

    checkPosition() {

    }

    
}