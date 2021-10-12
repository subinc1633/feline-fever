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

    // #addArrows() {
        

    //     // let randIdx = Math.floor(Math.random() * 4);
    //     // let randPos = pos[randPos];
    //     // let randDir = Array.from(Object.keys(pos))[randIdx];
    //     for (let key in pos) {
    //         let arrow = new Arrow(pos[key], -70, key);
    //         this.arrows.push(arrow);
    //     };
    // }

    #addRandomArrows() {
        let randomIdx = Math.floor(Math.random() * 4);
        let randDir = Array.from(Object.keys(this.pos))[randomIdx]
        let randPos = this.pos[randDir];
        const arrow = new Arrow(randPos, -70, randDir);
        this.randomArrows.push(arrow);
        // if (this.arrows[randomIdx] !== this.randomArrows[-1]) {
        // this.randomArrows.push(this.arrows[randomIdx]);
    }

    drawScore() {

    }
}