export default class Controls {
    constructor(game, ctx, width, height) {
        this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.prevTime = 0;
        this.animate(0);
        this.audio();
    }

    // KEYS = {
    //     w: 
    //     a:
    //     s:
    //     d:
    // }

    // have arrow flash when player presses 
    
    // keyBindings() {
    //     this.canvas.addEventListener("keydown" , (e) => {
    //          if event.code === ArrowUp => change img to selected-up.png
    //          
    //     });
    // }

    animate(timeStamp) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        const deltaTime = timeStamp - this.prevTime;
        this.prevTime = timeStamp;
        this.game.update(deltaTime);
        this.game.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }

    audio() {
        const song = new Audio("wannabe.mp3")
        song.addEventListener("canplaythrough", event => {
            window.setTimeout(() => {
                song.play();
            }, 1000);
        });

        // need option to mute audio

        song.addEventListener("ended", event => {
            this.game.gameOver();
        })
    }
}