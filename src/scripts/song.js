const ELEMENTS = {
    NUM_ARROWS: 20
};

export default class Song {
    constructor(game) {
        this.game = game;
        this.arrows = [];
        this.num_arrows = ELEMENTS.NUM_ARROWS;
    }

    speed(deltaTime) {
        for (let arrow of this.arrows) {
            this.move(deltaTime);
        }
    }


}