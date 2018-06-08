class Laser {
    constructor(p5, pos, vel) {
        this.p5 = p5

        this.position = pos
        this.velocity = vel
    }

    applyForce(force) {
        this.acceleration = force
    }

    update() {
        this.velocity.add(this.acceleration)
        this.acceleration = 0

        this.position.add(this.velocity)
    }

    reflect(reflector) {
        // point C is between A and B if dist(AC) + dist(BC) = dist(AB)
        const distAC = this.p5.dist(reflector.positionA.x, reflector.positionA.y, this.position.x, this.position.y)
        const distBC = this.p5.dist(reflector.positionB.x, reflector.positionB.y, this.position.x, this.position.y)
        const distAB = this.p5.dist(reflector.positionA.x, reflector.positionA.y, reflector.positionB.x, reflector.positionB.y)

        const differenceMargin = distAC + distBC - distAB
        if (Math.abs(differenceMargin) <= 2) {
            // this.p5.push()

            // const newX = Math.abs(this.velocity.x) > Math.abs(this.velocity.y) ? this.velocity.x : 0
            // const newY = Math.abs(this.velocity.y) > Math.abs(this.velocity.x) ? this.velocity.y : 0
            // const angle = this.p5.createVector(newX, newY)
            // angle.rotate(reflector.angle)

            const angle = this.p5.createVector(10, 0)
            angle.rotate(-this.p5.PI / 2)

            this.applyForce(-reflector.angle)
            console.log('REFLECTOR ANGLE', reflector.angle);
            // console.log('APPLYING FORCE AT ANGLE', angle);
            
            // this.p5.pop()
        }
    }

    /* istanbul ignore next */
    show() {
        this.p5.ellipse(this.position.x, this.position.y, 5)
    }
}

module.exports = Laser
