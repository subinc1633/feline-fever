import Arrow from "./arrow.js"
import Game from "./game.js"

const ELEMENTS = {
    NUM_ARROWS: 8,
    ARR_VEL: 5
}

export default class Song {
    constructor(game) {
        this.game = game;
        this.pos = {
            left: 255,
            up: 365,
            down: 482,
            right: 588
        };
        this.arrows = [];
        this.vel = ELEMENTS.ARR_VEL;
        this.num_arrows = ELEMENTS.NUM_ARROWS;
    }

    newArrows() {
        let randIdx = Math.floor(Math.random() * 4);
        let randDir = Array.from(Object.keys(this.pos))[randIdx]
        let randPos = this.pos[randPos];
        const arrow = new Arrow(randPos, -70, randDir);
        this.arrows.push(arrow);
    }

    scroll(deltaTime) {
        this.arrows = this.arrows.filter(arrow => !arrow.deletion);
        
    }
}