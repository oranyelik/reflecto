const color = 255
const pointerLength = 15

class Launcher {
    constructor(p5, x, y) {
        this.p5 = p5
        this.position = p5.createVector(x, y)

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
        this.p5.ellipse(this.position.x, this.position.y, 20)

        this.p5.stroke(255)
        this.p5.strokeWeight(2)

        this.p5.push()
        this.p5.translate(this.position.x, this.position.y)
        this.p5.rotate(this.angle)

        // draw a triangle
        this.p5.beginShape()
        this.p5.vertex(pointerLength, 0)
        this.p5.vertex(0, -6)
        this.p5.vertex(0, 6)
        this.p5.endShape(this.p5.CLOSE)

        this.p5.pop()
    }
}

module.exports = Launcher
