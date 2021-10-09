export default class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
    }

    keyBindings() {
        
    }

    run() {
        this.game.draw(this.ctx);
    }
}