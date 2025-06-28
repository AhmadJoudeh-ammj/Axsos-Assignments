class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`My ninja name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
    }
    drinkSake() {
        this.health += 10;
    }

}


class Sensei extends Ninja {
    constructor(name , wisdom) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("A wise ninja once said, 'The journey of a thousand miles begins with one step.'");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats(); 