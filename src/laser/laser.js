class Laser {
    constructor(p5, pos, vel) {
        this.p5 = p5

        this.position = pos
        this.velocity = vel
    }

    update() {
        this.position.add(this.velocity)
    }

    reflect(reflector) {
        // point C is between A and B if dist(AC) + dist(BC) = dist(AB)
        const distAC = this.p5.dist(reflector.positionA.x, reflector.positionA.y, this.position.x, this.position.y)
        const distBC = this.p5.dist(reflector.positionB.x, reflector.positionB.y, this.position.x, this.position.y)
        const distAB = this.p5.dist(reflector.positionA.x, reflector.positionA.y, reflector.positionB.x, reflector.positionB.y)

        const differenceMargin = distAC + distBC - distAB
        if (Math.abs(differenceMargin) <= 2) {
            this.velocity.mult(-1)
        }
    }

    /* istanbul ignore next */
    show() {
        this.p5.ellipse(this.position.x, this.position.y, 5)
    }
}

module.exports = Laser
