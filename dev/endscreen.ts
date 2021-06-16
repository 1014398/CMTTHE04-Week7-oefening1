import { GameObject } from "./gameobject.js"
import { Game } from "./game.js"

export class EndScreen extends GameObject {

    constructor(game: Game) {
        super("endscreen")

        const text = document.createElement("div")
        const btn = document.createElement("button")

        this.element.appendChild(text)
        this.element.appendChild(btn)

        text.innerText = "Game Over"
        btn.innerText = "Back to start"

        btn.addEventListener("click", () => console.log("this is the end"))
    }
}