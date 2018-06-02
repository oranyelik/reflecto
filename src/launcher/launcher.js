class Launcher {
    constructor(p5, x, y) {
        this.p5 = p5
        this.x = x
        this.y = y

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
        this.p5.ellipse(this.x, this.y, 20)
    }
}

module.exports = Launcher
