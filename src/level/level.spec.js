const Level = require('./level')
const Launcher = require('../launcher/launcher')

describe('Level', () => {
    test('exists', () => {
        const level = new Level()

        expect(level).toBeTruthy()
    })

    test('creates a launcher on init', () => {
        const level = new Level({}, Launcher)

        expect(level.launcher).toBeTruthy()
    })
})