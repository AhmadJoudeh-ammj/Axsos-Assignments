class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, res, power) {
        super(name, cost);
        this.res = res;
        this.power = power;
    }
    attack(target) {
        target.res -= this.power;
    }

}
class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost)
        this.text = `${magnitude > 0 ? "Raise" : "Lower"} the target ${stat} by ${magnitude}`;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (this.stat == "res") {
            target.res += this.magnitude
        } else if (this.stat == "power") {
            target.power += this.magnitude;
        }

    }
}
const RedNinja = new Unit("Red Belt Ninja", 20, -5, 15)
const blackNinja = new Unit("Black Belt Ninja", 50, 55, 58)
const effectOne = new Effect("Hard Algorithm", 20, "power", 11)
const effectTwo = new Effect("Unhandled Promise Rejection", 20, "power", 11)
const effectThree = new Effect("Pair Programming", 20, "power", 11)
console.log(RedNinja);

effectOne.play(RedNinja);
console.log(blackNinja);

effectTwo.play(RedNinja);
effectThree.play(RedNinja);
console.log(blackNinja);

RedNinja.attack(blackNinja);
console.log(blackNinja);