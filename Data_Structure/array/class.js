// Reference Type
var object1 = {value: 10}
var object2 = object1
var object3 = {value : 10}
object1 === object2 // true
object1 === object3 // false


// Context
const object4 = {
    a : function (){
        console.log(this)
    }
}

// object4.a()

// Instatiation
class Player {
    constructor(name, type){
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }

}

class Wizard extends Player {
    constructor(name, type, age){
        super(name, type)
        this.age = age
        console.log("wizard", this)
    }
    play() {
        console.log(`Weeeeee i'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("shelly", "Healer", 60)
//const wizard2 = new Wizard("Shawn", "Dark Magic")
// console.log(wizard1.play());
console.log(wizard1.age);