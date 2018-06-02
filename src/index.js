import p5 from 'p5'

const sketch = p5 => {
    p5.setup = () => {
        p5.createCanvas(800, 600)
        p5.background(51)
    }
}

new p5(sketch)
