const Launcher = require('./launcher')

describe('launcher', () => {
    test('exists', () => {
        const launcher = new Launcher()
        
        expect(launcher).toBeTruthy()
    })

    test('update does not move angle if not rotating', () => {
        const launcher = new Launcher()
        const angleBeforeUpdate = launcher.angle

        launcher.update()

        expect(launcher.angle).toBe(angleBeforeUpdate)
    })

    test('update moves angle when rotating', () => {
        const launcher = new Launcher()
        const angleBeforeUpdate = launcher.angle

        launcher.rotation = 1
        launcher.update()

        expect(launcher.angle).toBeGreaterThan(angleBeforeUpdate)
    })
})
