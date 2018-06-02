const color = 255
const pointerLength = 15

class Launcher {
    constructor(p5, x, y) {
        this.p5 = p5
        this.pos = p5.createVector(x, y)

        this.angle = 0
        this.rotation = 0
    }

    update() {
        if (this.rotation) {
            this.angle += this.rotation
        }
    }

    /* istanbul ignore next */
    show() {
        this.p5.fill(color)

        this.p5.noStroke()
        this.p5.ellipse(this.pos.x, this.pos.y, 20)

        // at some point it would be great to make the LINE into a TRIANGLE
        // see: https://p5js.org/reference/#/p5/triangle
        const dx = pointerLength * Math.cos(this.angle)
        const dy = pointerLength * Math.sin(this.angle)
        const pointer = new this.p5.createVector(this.pos.x + dx, this.pos.y + dy)

        this.p5.stroke(255)
        this.p5.strokeWeight(2)
        this.p5.line(this.pos.x, this.pos.y, pointer.x, pointer.y)
    }
}

module.exports = Launcher
