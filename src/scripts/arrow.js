const PROPERTIES = {
    SIZE: 50,
    SPEED: 2
};

export default class Arrow { 
    constructor(ctx) {
        this.color = "#ffffff";
        this.strokeColor = "#";
        this.size = PROPERTIES.SIZE;
        this.speed = PROPERTIES.SPEED;
        this.ctx = ctx;

    }

    draw(ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(300, 315, 5, 5);
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                ctx.strokeStyle = `rgb(
                    ${Math.floor(240 - 30 * i)},
                    0,
                    ${Math.floor(240 - 30 * j)})`
                ctx.stroke();
            }
        }
    }

    
}