import Game from "./game.js";

export default class Controls {
    constructor(game, ctx, canvas, width, height) {
        this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.gameOver = false;
        this.prevTime = Date.now();
    }

    start() {
        this.gameOver = false;
        this.keyBindings();
        let play = setTimeout(() => {
            this.playAudio();
            this.muteAudio();
            setTimeout(() => {
                this.animate(0);
            }, 400);
        }, 500);
        if (this.gameOver) {
            clearTimeout(play);
        }
    }

    restart() {
        this.game.score = 0;
        this.game = new Game();
        this.start();
    }

    playAgain() {
        const divModal = document.getElementById("modal");
        divModal.style.display = "block";
        let p = document.getElementsByTagName("p");
        p.innerText = `${this.game.score}`;
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
            if (this.y > 500 || this.game.pressArrow(arrow)) {
                return arrow.deletion = true;
            }
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        let currentTime = Date.now();
        const deltaTime = currentTime - this.prevTime;
        this.prevTime = currentTime;
        this.game.update(deltaTime);
        this.game.draw(this.ctx);
        this.drawScore();
        if (!this.gameOver) {
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    playAudio() {
        this.song = new Audio("wannabe.mp3");
        this.song.addEventListener("canplaythrough", event => {
            this.song.play();
        });

        this.song.addEventListener("ended", event => {
            this.gameOver = true;
            this.canvas.style.display = "none";
            this.playAgain();
        });
    }  

    muteAudio() {
        const muteButton = document.getElementById("mute");
        muteButton.addEventListener("click", event => {
            this.song.muted = !this.song.muted;
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