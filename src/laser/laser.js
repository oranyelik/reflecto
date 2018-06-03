class Laser {
    constructor(p5, pos, vel) {
        this.p5 = p5

        this.position = pos
        this.velocity = vel
    }

    update() {
        this.position.add(this.velocity)
    }

    /* istanbul ignore next */
    show() {
        this.p5.ellipse(this.position.x, this.position.y, 5)
    }
}

module.exports = Laser
