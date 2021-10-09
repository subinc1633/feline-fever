const PROPERTIES = {
    SIZE: 50,
    SPEED: 5
};

export default class Arrow { 
    constructor() {
        this.color = "#ffffff";
        this.strokeColor = "#ed1851";
        this.size = PROPERTIES.SIZE;
        this.speed = PROPERTIES.SPEED;
        this.leftArrow = function(ctx) {
            const left = new Image();
            left.onload = function() {
                ctx.drawImage(left, 350, 500);
            };
            img.src = "../imgs/disco-ball.png"
        }
    }

    
}