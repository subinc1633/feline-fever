export default class Controls {
    constructor(game, ctx, width, height) {
        this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }

    // KEYS = {
    //     w: 
    //     a:
    //     s:
    //     d:
    // }

    start() {
        // this.keyBindings();
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    }
    
    keyBindings() {
        
    }

    animate(timeStamp) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        let deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        this.game.update(deltaTime);
        this.game.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}