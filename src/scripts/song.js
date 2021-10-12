import Arrow from "./arrow.js"
import Game from "./game.js"

const ELEMENTS = {
    NUM_ARROWS: 8,
    ARR_VEL: 5
}

export default class Song {
    constructor(game) {
        this.game = game;
        this.arrows = this.game.randomArrows;
        this.vel = ELEMENTS.ARR_VEL;
        this.num_arrows = ELEMENTS.NUM_ARROWS;
    }

    newArrows() {
        this.arrows.push()
    }

    scroll(deltaTime) {
        for (let arrow of this.arrows) {
            arrow.move();
        }
    }
}