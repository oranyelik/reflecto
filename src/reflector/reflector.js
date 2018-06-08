class Reflector {
    constructor(p5, x1, y1, x2, y2) {
        this.p5 = p5
        this.positionA = p5.createVector(x1, y1)
        this.positionB = p5.createVector(x2, y2)
        this.angle = this.calculateAngle()
    }

    calculateAngle() {
        // angle in degrees
        const angle = Math.atan2(this.positionB.y - this.positionA.y, this.positionB.x - this.positionA.x) * 180 / Math.PI
        console.log('angle', angle);
        return angle
    }

    show() {
        this.p5.stroke(255)
        this.p5.strokeWeight(4)
        this.p5.line(this.positionA.x, this.positionA.y, this.positionB.x, this.positionB.y)
    }
}

module.exports = Reflector
