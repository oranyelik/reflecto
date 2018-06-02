const launcherX = 10
const launcherY = 10

class Level {
    constructor(p5, Launcher) {
        if (Launcher) {
            this.launcher = new Launcher(p5, launcherX, launcherY)
        }
    }
}

module.exports = Level
