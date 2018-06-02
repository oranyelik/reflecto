class Launcher {
    constructor(p5, x, y) {
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
        p5.ellipse(x, y, 20)
    }
}

module.exports = Launcher
