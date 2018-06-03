import p5 from 'p5'
import Launcher from './launcher/launcher'
import Laser from './laser/laser'

let launcher, laser

const sketch = p5 => {
    p5.setup = () => {
        p5.createCanvas(800, 600)

        launcher = new Launcher(p5, 20, 20)
    }

    p5.draw = () => {
        p5.background(51)

        launcher.update()
        launcher.show()

        if (laser) {
            laser.update()
            laser.show()
        }
    }

    p5.keyPressed = () => {
        const rotationAmount = 0.05

        switch (p5.keyCode) {
            case p5.LEFT_ARROW:
                launcher.rotation = -rotationAmount
                break
            case p5.RIGHT_ARROW:
                launcher.rotation = rotationAmount
                break
            case 32:    // space
                const angle = p5.createVector(10, 0)
                angle.rotate(launcher.angle)

                laser = new Laser(p5, launcher.position.copy(), angle)
                break
        }
    }

    p5.keyReleased = () => {
        launcher.rotation = 0
    }
}

new p5(sketch)
