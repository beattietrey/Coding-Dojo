class Ninja{
    constructor(name, health=10, speed=3,strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.name+"'s stats:");
        console.log("Health: " + this.health)
        console.log("Speed: " + this.speed)
        console.log("Strength: " + this.strength)
    }
    drinkSake() {
        this.health+=10
    }
}

const ninja1 = new Ninja("Trey")

ninja1.showStats();
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();