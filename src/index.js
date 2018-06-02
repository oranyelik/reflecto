import p5 from 'p5'
import Launcher from './launcher/launcher'

let launcher

const sketch = p5 => {
    p5.setup = () => {
        p5.createCanvas(800, 600)

        launcher = new Launcher(p5, 20, 20)
    }

    p5.draw = () => {
        p5.background(51)

        launcher.update()
        launcher.show()
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
        }
    }

    p5.keyReleased = () => {
        launcher.rotation = 0
    }
}

new p5(sketch)
