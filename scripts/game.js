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
        menu: null,
        buttonNewGame: null,
        buttonContinue: null
    },
    init() {
        this.ctx = document.getElementById("canvas").getContext("2d")
        this.gameUI.menu = document.getElementById("menu")
        this.gameUI.buttonNewGame = document.getElementById("newgame")
        this.gameUI.buttonContinue = document.getElementById("continue")

        this.setEvants()
    },
    setEvants() {
        this.gameUI.buttonNewGame.onclick = () => {
            this.gameUI.menu.style.display = "none"
            document.getElementById("canvas").style.display = "block"

            console.log("buttonNewGame click")
        }
        this.gameUI.buttonContinue.onclick = () => {
            console.log("buttonContinue click")
        }
    }
}

game.init()
