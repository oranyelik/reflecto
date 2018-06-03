class Reflector {
    constructor(p5, x, y, len, angle) {
        this.p5 = p5
        this.position = p5.createVector(x, y)
        this.len = len
        this.angle = angle
    }

    show() {
        this.p5.push()
        this.p5.translate(this.position.x, this.position.y)

        const x2 = this.len * Math.cos(this.angle)
        const y2 = this.len * Math.sin(this.angle)
        const pointB = this.p5.createVector(x2, y2)

        this.p5.stroke(255)
        this.p5.strokeWeight(4)
        this.p5.line(this.position.x, this.position.y, pointB.x, pointB.y)

        this.p5.pop()
    }
}

module.exports = Reflector
