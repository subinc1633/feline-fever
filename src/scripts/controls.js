import Grade from './grade.js';

export default class Controls {
    constructor(game, ctx, width, height) {
        this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.gameOver = false;
        this.prevTime = 0;
    }

    start() {
        this.running = true;
        let aniTimeout = null;
        this.keyBindings();
        this.playAudio();
        setTimeout(() => {
            aniTimeout = requestAnimationFrame(this.animate.bind(this));
        }, 550);

        if (this.gameOver) clearTimeout(aniTimeout);
    }

    playAgain() {
        const divLoad = document.getElementById('loading');
        divLoad.style.display = 'none';
        const divEnd = document.getElementById('ending');
        divEnd.style.display = 'flex';
        let p = document.getElementById('score');
        p.innerText = `${this.game.score}`;
    }

    pressArrow(arrow) {
        this.grade = new Grade(arrow);

        if (this.grade.checkPos(5)) {
            this.game.score += 500;
        } else if (this.grade.checkPos(10)) {
            this.game.score += 400;
        } else if (this.grade.checkPos(20)) {
            this.game.score += 300;
        } else if (this.grade.checkPos(40)) {
            this.game.score += 200;
        } else {
            return false;
        }

        return true;
    }
    
    keyBindings() {
        document.addEventListener('keydown' , event => {
            if (['Space', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'].indexOf(event.code) > -1) {
                event.preventDefault();
            }

            switch(event.code) {
                case 'KeyW':
                case 'ArrowUp':
                    this.pressKey('up');
                    break;
                case 'KeyA':
                case 'ArrowLeft':
                    this.pressKey('left');
                    break;
                case 'KeyS':
                case 'ArrowDown':
                    this.pressKey('down');
                    break;
                case 'KeyD':
                case 'ArrowRight':
                    this.pressKey('right');
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

    animate(time) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        let deltaTime = time - this.prevTime;
        this.prevTime = time;
        this.game.update(deltaTime);
        this.game.draw(this.ctx);
        this.drawScore(this.game.score, 30, 40);
        if (!this.gameOver) {
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    playAudio() {
        this.song = new Audio('wannabe.mp3');
        this.song.addEventListener('canplaythrough', event => {
            this.song.play();
        });

        let muteButton = document.getElementById('mute');
        muteButton.addEventListener('click', event => {
            this.song.muted = !this.song.muted;
        });

        this.song.addEventListener('ended', event => {
            this.gameOver = true;
            let canvas = document.getElementById('game-canvas');
            canvas.style.display = 'none';
            this.playAgain();
        });
    }

    drawScore(text, x, y) {
        this.ctx.font = 'bold 30px sans-serif';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(text, x, y);
    }
}