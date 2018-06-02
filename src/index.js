import p5 from 'p5'
import Launcher from './launcher/launcher'

let launcher;

const sketch = p5 => {
    p5.setup = () => {
        p5.createCanvas(800, 600)
        p5.background(51)

        launcher = new Launcher(p5, 20, 20)
    }

    p5.draw = () => {
        launcher.update()
        launcher.show()
    }
}

new p5(sketch)
