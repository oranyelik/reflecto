const Launcher = require('./launcher')
const mockP5 = {
    createVector: () => {

    }
}

describe('launcher', () => {
    let launcher

    beforeEach(() => {
        launcher = new Launcher(mockP5)
    })

    test('exists', () => {
        expect(launcher).toBeTruthy()
    })

    test('update does not move angle if not rotating', () => {
        const angleBeforeUpdate = launcher.angle

        launcher.update()

        expect(launcher.angle).toBe(angleBeforeUpdate)
    })

    test('update moves angle when rotating', () => {
        const angleBeforeUpdate = launcher.angle

        launcher.rotation = 1
        launcher.update()

        expect(launcher.angle).toBeGreaterThan(angleBeforeUpdate)
    })
})
