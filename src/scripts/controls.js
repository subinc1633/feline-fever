export default class Controls {
    constructor(game, ctx, width, height) {
        this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.prevTime = 0;
        this.animate(0);
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
        const AudioContext = window.AudioContext;
        const audioContext = new AudioContext();
        const audioElement = document.querySelector("audio");
        const song = audioContext.createMediaElementSource(audioElement);
        song.connect(gainNode);
        gainNode.connect(audioContext.connect());
        // window.setInterval(() => {
        //     document.song
        // });

        if (song.isPlaying) {
            song.pause();
            isPlaying = false;
        } else {
            song.play();
            isPlaying = true;
        }
    }

    toggleAudio() {
        
    }
}