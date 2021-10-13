export default class Grade {
    constructor(arrow) {
        this.arrow = arrow;
        this.gauge = 373;
    }

    checkPos(num) {
        return Math.abs(this.gauge - this.arrow.y) <= num;
    }
}