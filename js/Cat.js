import { Pet } from "./Pet.js"

export class Cat { 
    constructor(name, furColor) {
        this.name = name;
        this.furColor = furColor;
        this.legsCount = 4;
        this.eyesCount = 2;
    }
    hi() {
        return `Hi, my name is ${this.name}.`;
    }
    voice() {
        return `${this.name}: miau, miau 🐈🐈`
    }

}

