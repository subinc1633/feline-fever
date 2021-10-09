export default class Controls {
    constructor(game, ctx, width, height) {
        this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }

    keyBindings() {
        
    }

    animate(timeStamp) {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        let prevTime = 0;
        const diff = timeStamp - prevTime;
        prevTime = timeStamp;
        requestAnimationFrame(animate);
    }

    run() {
        this.game.draw(this.ctx);
    }

    start() {
        this.game.background(this.ctx);
    }
}