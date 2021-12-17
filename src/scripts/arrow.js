export default class Arrow { 
    constructor(x, y, dir, dt) {
        this.x = x;
        this.y = y;
        this.speed = 0.25;
        this.dir = dir;
        this.deletion = false;
        this.dt = dt;
    }

    draw(ctx) {
        switch (this.dir) {
            case 'left':
                const leftArrow = document.getElementById('leftArrow');
                ctx.drawImage(leftArrow, this.x, this.y);
                break;
            case 'up':
                const upArrow = document.getElementById("upArrow");
                ctx.drawImage(upArrow, this.x, this.y);
                break;
            case 'down':
                const downArrow = document.getElementById("downArrow");
                ctx.drawImage(downArrow, this.x, this.y);
                break;
            case 'right':
                const rightArrow = document.getElementById("rightArrow");
                ctx.drawImage(rightArrow, this.x, this.y);
                break; 
            default:
                break;
        }
    }

    move() {
        let leftRight = (this.dir === 'left' || this.dir === 'right');
        let upDown = (this.dir === 'up' || this.dir === 'down');

        if (leftRight && this.y < 530 || upDown && this.y < 530) {
            this.y += this.speed * this.dt;
        } else {
            this.deletion = true;
        }
    }
}