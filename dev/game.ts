import { GameObject } from "./gameobject.js"
import { GameScreen } from "./gamescreen.js"

export class Game {

    private screen:GameScreen

    constructor(){
        this.screen = new GameScreen()
        this.gameLoop()
    }

    private gameLoop(){
        this.screen.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
}

new Game()