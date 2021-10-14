// import Avatar from "./avatar.js";
import Arrow from "./arrow.js";
import Grade from "./grade.js";
import Song from "./song.js";

export default class Game {
    constructor() {
        this.randomArrows = [];
        this.avatar = [];
        this.arrowInterval = 1000;
        this.arrowTimer = 0;
        this.song = new Song();
        this.score = 0;
        this.pos = {
            left: 255,
            up: 365,
            down: 482,
            right: 588
        }
        this.beats = this.song.beats;
    }

    draw(ctx) {
        for (let arrow of this.randomArrows) { arrow.draw(ctx) };
    }

    update(deltaTime) {
        this.randomArrows = this.randomArrows.filter(arrow => !arrow.deletion);

        if (this.arrowTimer > this.arrowInterval) {
            this.#addRandomArrows();
            this.arrowInterval = this.beats.shift();
            this.arrowTimer = 0;
        } else {
            this.arrowTimer += deltaTime;
        }

        for (let [idx, arrow] of this.randomArrows.entries()) {
            arrow.move(deltaTime);
        };
    }

    // #addAvatar() {
        
    // }

    #addRandomArrows() {
        let randomIdx = Math.floor(Math.random() * 4);
        let randDir = Array.from(Object.keys(this.pos))[randomIdx];
        let randPos = this.pos[randDir];
        const arrow = new Arrow(randPos, -70, randDir);
        this.randomArrows.push(arrow);
    }

    pressArrow(arrow) {
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
            return false;
        }

        return true;
    }
}