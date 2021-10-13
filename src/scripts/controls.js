export default class Controls {
    constructor(game, ctx, width, height) {
        this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.song = document.getElementById("music");
        this.gameOver = true;
        this.prevTime = 0;
    }

    start() {
        this.gameOver = false;
        this.keyBindings();
        this.playAudio();
        this.muteAudio();
        window.setTimeout(() => {
            this.animate(0);
        }, 500);
    }

    restart() {
        this.game.score = 0;
        this.game = new Game(this.ctx);
        this.start();
    }

    playAgain() {
        const divModal = document.getElementById("ending");
        const h3 = divModal.appendChild("h3");
        h3.style.color = "#b88cba";
        h3.style.textTransform = "uppercase";
        const playButton = divModal.appendChild("button");
        playButton.style.width = "300px";
        playButton.style.height = "50px";
        playButton.fillStyle = "#ac72cd";
        divModal.style.display = "block";

        playButton.addEventListener("click", event => {
            this.restart();
        })
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
            if (this.game.pressArrow(arrow)) {
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
        this.ending();
        if (!this.gameOver) {
            requestAnimationFrame(this.animate.bind(this));
        } else {
            this.playAgain();
        }
    }

    playAudio() {
        this.song.play();
    }  

    muteAudio() {
        const muteButton = document.getElementById("mute");
        muteButton.addEventListener("click", event => {
            this.song.muted = !this.song.muted;
        });
    }

    ending() {
        this.song.addEventListener("ended", event => {
            this.gameOver = true;
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