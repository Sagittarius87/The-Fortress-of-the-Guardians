let game = {
    ctx: null,
    gameRunning: false,
    sprites: {
        hero: null,
        tile: null,
        wall: null
    },
    sounds: {
        heroStep: null
    },
    init() {
        this.ctx = document.getElementById("canvas").getContext("2d")
    }
}

console.log(game.init)
