export default class Controls {
    constructor(game, ctx, width, height) {
        this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.prevTime = 0;
    }

    start() {
        this.keyBindings();
        this.playAudio();
        window.setTimeout(() => {
            this.animate(0);
        }, 1000);
    }
    
    keyBindings() {
        document.addEventListener("keydown" , event => {
            if (["Space", "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"].indexOf(event.code) > -1) {
                event.preventDefault();
            }

            switch(event.code) {
                case "KeyW":
                case "ArrowUp":
                    this.pressKey("up");
                    break;
                case "KeyA":
                case "ArrowLeft":
                    this.pressKey("left");
                    break;
                case "KeyS":
                case "ArrowDown":
                    this.pressKey("down");
                    break;
                case "KeyD":
                case "ArrowRight":
                    this.pressKey("right");
                    break;
            }
        });
    }

    pressKey(dir) {
        let dirArrows = this.game.randomArrows.filter(arrow => arrow.dir === dir);
        for (let arrow of dirArrows) {
            if (arrow.y > 520 || this.game.pressArrow(arrow)) {
                return arrow.deletion = true;
            }
        };
    }

    animate(timeStamp) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        const deltaTime = timeStamp - this.prevTime;
        this.prevTime = timeStamp;
        this.game.update(deltaTime);
        this.game.draw(this.ctx);
        this.drawScore();
        requestAnimationFrame(this.animate.bind(this));
    }

    playAudio() {
        const song = new Audio("wannabe.mp3");
        song.addEventListener("canplaythrough", event => {
            song.play();
        });
        
        const muteButton = document.getElementById("mute");
        muteButton.addEventListener("click", event => {
            song.muted = !song.muted;
        });
    }

    drawScore() {
        const pos = {
            x: 30,
            y: 40
        };
        this.ctx.font = "bold 30px sans-serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.game.score, pos.x, pos.y);
    }
}