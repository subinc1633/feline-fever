export default class Controls {
    constructor(game, ctx, width, height) {
        this.game = game;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.prevTime = 0;
        this.animate(0);
        this.playAudio();
    }
    
    keyBindings() {
        document.addEventListener("keydown" , event => {
            switch(event.code) {
                case "KeyW":
                case "ArrowUp":
                    let upArrows = this.game.randomArrows.filter(arrow => arrow.image === upArrow);
                    for (let arrow of upArrows) {
                        arrow.image = upSelect;
                    };
                    break;
                case "KeyA":
                case "ArrowLeft":
                    event.preventDefault();
                    let leftArrows = this.game.randomArrows.filter(arrow => arrow.image === leftArrow);
                    for (let arrow of leftArrows) {
                        arrow.image = leftSelect;
                    };
                    break;
                case "KeyS":
                case "ArrowDown":
                    event.preventDefault();
                    let downArrows = this.game.randomArrows.filter(arrow => arrow.image === downArrow);
                    debugger
                    for (let arrow of downArrows) {
                        arrow.image = downSelect;
                    };
                    break;
                case "KeyD":
                case "ArrowRight":
                    event.preventDefault();
                    let rightArrows = this.game.randomArrows.filter(arrow => arrow.image === rightArrow);
                    for (let arrow of rightArrows) {
                        arrow.image = rightSelect;
                    };
                    break;
            }
        });
    }

    animate(timeStamp) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        const deltaTime = timeStamp - this.prevTime;
        this.prevTime = timeStamp;
        this.game.update(deltaTime);
        this.game.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }

    playAudio() {
        const song = new Audio("wannabe.mp3");
        song.addEventListener("canplaythrough", event => {
            window.setTimeout(() => {
                song.play();
            }, 1000);
        });
        
        const muteButton = document.getElementById("mute");
        console.log(muteButton)
        muteButton.addEventListener("click", event => {
            song.muted = !song.muted;
        });
        // need option to mute audio
    }
}