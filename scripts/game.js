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
    gameUI: {
        buttonNewGame: null,
        buttonContinue: null
    },
    init() {
        this.ctx = document.getElementById("canvas").getContext("2d")
        this.gameUI.buttonNewGame = document.getElementById("newgame")
        this.gameUI.buttonContinue = document.getElementById("continue")

        this.setEvants()
    },
    setEvants() {
        this.gameUI.buttonNewGame.onclick = () => {
            console.log("buttonNewGame click")
        }
        this.gameUI.buttonContinue.onclick = () => {
            console.log("buttonContinue click")
        }
    }
}

game.init()
