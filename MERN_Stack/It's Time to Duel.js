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
        console.log(`${this.name} attacks ${target.name} for ${this.power} damage!`);
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.text = `${magnitude > 0 ? "Raise" : "Lower"} the target's ${stat} by ${Math.abs(magnitude)}`;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        console.log(`${this.name} played on ${target.name}: ${this.text}`);
        if (this.stat === "resilience") {
            target.res += this.magnitude;
        } else if (this.stat === "power") {
            target.power += this.magnitude;
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 4, 3);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 4, 5);

const effect1 = new Effect("Hard Algorithm", 2, "resilience", +3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "power", +2);


effect1.play(redBeltNinja); // +3 resilience to red
effect2.play(redBeltNinja); // -2 resilience to red
effect3.play(redBeltNinja); // +2 power to red
redBeltNinja.attack(blackBeltNinja); // red attacks black


console.log("Red Belt Ninja:", redBeltNinja);
console.log("Black Belt Ninja:", blackBeltNinja);