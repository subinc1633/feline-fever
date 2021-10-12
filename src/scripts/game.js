// import Avatar from "./avatar.js";
import Arrow from "./arrow.js";
import Grade from "./grade.js";

const DEFAULT_DELTA_TIME = 1000/60;
const TIMING = {
    0: 1000,
    1: 2000,
    2: 3000
}

export default class Game {
    constructor() {
        this.randomArrows = [];
        this.avatar = [];
        this.arrowInterval = 1500;
        this.arrowTimer = 0;
        this.score = 0;
        this.pos = {
            left: 255,
            up: 365,
            down: 482,
            right: 588
        }
    }

    draw(ctx) {
        for (let [idx, arrow] of this.randomArrows.entries()) {
            window.setInterval(() => {
                arrow.draw(ctx);
            }, TIMING[idx]);
        }
    }

    update(deltaTime) {
        this.randomArrows = this.randomArrows.filter(arrow => !arrow.deletion);
        if (this.arrowTimer > this.arrowInterval) {
            this.#addRandomArrows();
            this.arrowTimer = 0;
        } else {
            this.arrowTimer += deltaTime;
        }

        for (let arrow of this.randomArrows) { arrow.move(deltaTime) };
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

    pressArrow(arrow) {
        // check the y-position of the arrow and compare it to a standard (y = 373)
        // if the y-position of when the player hits the arrow is within the indicated range (num), 
            // display the respective grade ("purrfect", "pawful", etc.)
        console.log(arrow.y)
        this.grade = new Grade(arrow);
        if (this.grade.checkPos(5)) {
            console.log("purrfect")
            this.score += 500;
        } else if (this.grade.checkPos(10)) {
            console.log("clawsome")
            this.score += 400;
        } else if (this.grade.checkPos(20)) {
            console.log("furmidable")
            this.score += 300;
        } else if (this.grade.checkPos(40)) {
            console.log("pawful")
            this.score += 200;
        } else {
            console.log("miss")
        }

        return true;
    }

    speedArrow(deltaTime) {
        for (let [idx, arrow] of this.randomArrows.entries()) {
            
        }
    }

    gameOver() {
        cancelAnimationFrame()
        // deal with favicon error
    }
}