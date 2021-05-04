class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
    }

    play(target) {
        if(target instanceof Unit) {
            if(this.stat = "power") {
                target.power += this.magnitude
            } else if (this.stat = "res") {
                target.res += this.magnitude
            } else {
                throw new Error("Must target a unit's power or resilience")
            }
        } else {
            throw new Error("Must target a unit card")
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 5);
const hardAlgo = new Effect("Hard Algorithm",2,"Increase Target's Resilience By 3","res", 3)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandle = new Effect("Unhandle Promise Rejection",1,"Reduce Target's Resilience by 2","res",-2)
unhandle.play(redBeltNinja);
const pairProgram = new Effect("Pair Programming",3, "Increase Target's Power by 3","power", 3);
pairProgram(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);

