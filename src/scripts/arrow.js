const PROPERTIES = {
    SIZE: 50,
    SPEED: 5
};

export default class Arrow { 
    constructor() {
        this.color = "#ffffff";
        this.strokeColor = `rgb(
            ${Math.floor(240 - 30 * i)},
            0,
            ${Math.floor(240 - 30 * j)})`
        this.size = PROPERTIES.SIZE;
        this.speed = PROPERTIES.SPEED;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        this.leftArrow = ctx.fillRect(300, 315, 100, 100);

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                ctx.strokeStyle = this.strokeColor;
                ctx.strokeRect(300, 315, 100, 100);
            }
        }
    }

    newArrow(ctx, startX, startY, endX, endY) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.closePath();
    }



    
}