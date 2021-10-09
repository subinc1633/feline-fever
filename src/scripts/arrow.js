const PROPERTIES = {
    SIZE: 50,
    SPEED: 5
};

export default class Arrow { 
    constructor() {
        this.color = "#ffffff";
        this.strokeColor = "#ed1851"
        this.size = PROPERTIES.SIZE;
        this.speed = PROPERTIES.SPEED;
    }

    newArrow(ctx, startX, startY, endX, endY) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.closePath();
    }
}