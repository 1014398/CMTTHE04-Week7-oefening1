import { Background } from "./background.js";
import { Enemy } from "./enemy.js";
import { Player } from "./player.js";
import { Speech } from "./speech.js";
import { StartButton } from "./startbutton.js";
export class Game {
    constructor() {
        this.enemies = [];
        this.speech = new Speech();
        this.background = new Background();
        this.startButton = new StartButton(this);
    }
    startGame() {
        this.player = new Player();
        this.enemies.push(new Enemy(), new Enemy(), new Enemy());
        this.speech.speak("Eliminate all enemies");
        this.gameLoop();
    }
    gameLoop() {
        this.background.update();
        this.player.update();
        for (let e of this.enemies) {
            e.update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map