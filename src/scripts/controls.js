import Game from "./game.js";
import Grade from "./grade.js";

export default class Controls {
    constructor(game, ctx, width, height) {
        this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
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
        this.game = new Game();
        this.prevTime = Date.now();
        this.start();
    }

    playAgain() {
        const divLoad = document.getElementById("loading");
        divLoad.style.display = "none";
        const divEnd = document.getElementById("ending");
        divEnd.style.display = "flex";
        let p = document.getElementById("score");
        p.innerText = `${this.game.score}`;
    }

    pressArrow(arrow) {
        this.grade = new Grade(arrow);

        if (this.grade.checkPos(5)) {
            const purrfect = document.getElementById("purrfect");
            this.ctx.drawImage(purrfect, 5, 712);
            this.game.score += 500;
        } else if (this.grade.checkPos(10)) {
            const clawsome = document.getElementById("clawsome");
            this.ctx.drawImage(clawsome, 5, 712);
            this.game.score += 400;
        } else if (this.grade.checkPos(20)) {
            const furmidable = document.getElementById("furmidable");
            this.ctx.drawImage(furmidable, 5, 712);
            this.game.score += 300;
        } else if (this.grade.checkPos(40)) {
            const pawful = document.getElementById("pawful");
            this.ctx.drawImage(pawful, 5, 712);
            this.game.score += 200;
        } else {
            const miss = document.getElementById("miss");
            this.ctx.drawImage(miss, 5, 712);
            return false;
        }

        return true;
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
            if (this.y > 500 || this.pressArrow(arrow)) {
                return arrow.deletion = true;
            }
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        let currentTime = Date.now();
        const deltaTime = currentTime - this.prevTime;
        this.prevTime = currentTime;
        this.game.update(deltaTime, this.ctx);
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
            let canvas = document.getElementById("game-canvas");
            canvas.style.display = "none";
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