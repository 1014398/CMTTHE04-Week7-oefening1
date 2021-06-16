import { GameObject } from "./gameobject.js"

export class Robot extends GameObject {

    private speed : number = Math.random() * 3 + 2

    constructor(){
        super("robot")
        this.x = Math.random() * 600
        this.y = Math.random() * 450 + 100
        this.element.addEventListener("click", ()=>this.removeMe())
    }

    private removeMe(){
        console.log("remove this robot from the DOM and from the robots array")
    }

    public update(): void{
        this.x += this.speed
        if(this.x > window.innerWidth) {
            this.x = -100
            this.y = Math.random() * 450 + 100
        }
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}