// import Avatar from "./avatar.js";
import Arrow from "./arrow.js";
import Song from "./song.js";

export default class Game {
    constructor() {
        this.randomArrows = [];
        this.avatar = [];
        this.arrowInterval = 1000;
        this.arrowTimer = 0;
        this.song = new Song();
        this.secondsong = new Song();
        console.log(this.secondsong.beats)
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

    update(deltaTime, ctx) {
        this.randomArrows = this.randomArrows.filter(arrow => !arrow.deletion);

        if (this.arrowTimer > this.arrowInterval) {
            this.#addRandomArrows();
            this.arrowInterval = this.beats.shift();
            this.arrowTimer = 0;
        } else {
            this.arrowTimer += deltaTime;
        }

        for (let arrow of this.randomArrows) {
            arrow.move(ctx);
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
}