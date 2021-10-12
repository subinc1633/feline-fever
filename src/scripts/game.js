import Avatar from "./avatar.js";
import Arrow from "./arrow.js";
import Song from "./song.js";

export default class Game {
    constructor() {
        this.arrows = [];
        this.randomArrows = [];
        this.avatar = [];
        this.arrowInterval = 1500;
        this.arrowTimer = 0;
        this.song = new Song(this);
        this.pos = {
            left: 255,
            up: 365,
            down: 482,
            right: 588
        }
    }

    draw(ctx) {
        for (let arrow of this.randomArrows) { arrow.draw(ctx) };
    }

    update(deltaTime) {
        this.randomArrows = this.randomArrows.filter(arrow => !arrow.deletion);
        if (this.arrowTimer > this.arrowInterval) {
            this.#addRandomArrows();
            this.arrowTimer = 0;
        } else {
            this.arrowTimer += deltaTime;
        }
        
        for (let arrow of this.randomArrows) { arrow.move() };
    }

    #addAvatar() {
        
    }

    #addRandomArrows() {
        let randomIdx = Math.floor(Math.random() * 4);
        let randDir = Array.from(Object.keys(this.pos))[randomIdx]
        let randPos = this.pos[randDir];
        const arrow = new Arrow(randPos, -70, randDir);
        this.randomArrows.push(arrow);
    }

    drawScore() {

    }

    gameOver() {
        clearInterval();
        // deal with favicon error
    }
}