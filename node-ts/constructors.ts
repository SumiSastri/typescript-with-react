// There are no classes in javascript - look at class.js 
// class Animal is actually function Animal(){} - a function that creates an empty object in the browser memory
class Animal {
    name: string;
    constructor(theName: string){
        this.name = theName
        console.log("Animal Constructor Method Logged: " + this.name)
    }
    walk(distance:number){
        console.log(`Animal Protype Method Logged: Hi my name is ${this.name} I can walk ${distance} miles`)
    }
    static talk(word:string){
        console.log(`Animal Static Method Logged: I say ${word}`)
    }
    getId(id:number){
        return id
    }
}
console.log(this, `logs this points to the empty object created in the window/ browser memory`)
// { __esModule: true } 'logs this points to the empty object created in the window/ browser memory or in node the _esModule'
console.log(Animal, `logs class Animal`)
// { [Function: Animal] talk: [Function] } 'logs class Animal' proves it is a function

// The animal class has been encapsulated, it is instantiated with the new key word
// The new key word creates a new instance of the class
let myAnimal = new Animal ("KingKong")
console.log(myAnimal, `logs myAnimal`)
myAnimal.walk(20)
Animal.talk("GrrrrorrillaGrowl")
console.log(myAnimal.getId(10))

console.log(this, `logs this after myAnimal`)
// { __esModule: true } 'logs this after myAnimal' proves it inherits props and method from the Animal blueprint

// Class extention and inheritance extends the blue print of the animal class
class Insect extends Animal{}
let myInsect = new Insect("BizzieBee");
console.log(myInsect)
Insect.talk ("Buzzabuzaabeebee")
console.log(myInsect.getId(15))

// The extended class must have the super method, this calls the constructor method of the parent class - Animal first
// Then the reptile constructor method called with super method
// The reptile prototype method can overwrite the Animal prototype method
// Static methods can not be overwritten
class Reptile extends Animal {
    constructor(theName: string){
        super(theName)
        console.log("Reptile Constructor Method Logged: " + this.name)
    }
    // getId(x:number){
    //     return super.getId()
    // }
    walk(distance:number){
        console.log (`Reptile Prototype Method Logged: I crawl so I can walk ${distance} miles`)
    }
}
let myReptile = new Reptile("Kaa")
myReptile.walk(0)
console.log (myReptile)
Reptile.talk('hisssssssssnake')
console.log(myReptile.getId(14))

// Abstraction - this allows class extention but not modification
// It is designed to be derived from - it is therefore a base class
// The protected props and methods prevent access of these outside the blueprint and ensures the blue print is not changed


abstract class AnimalSpecies {
    // by default properties are public and available to all prototypes of class
    // private means this name is only available for this class
    private name: string;
    constructor(theName: string){
        this.name = theName
    }
    moves (distance:number){
        console.log(`Hi my name is ${this.name} I can move ${distance} mph`)
    }
}

class Mollusc extends AnimalSpecies {
    constructor(theName: string){
        super(theName)
    }
    moves(distance:number){
        console.log (`I can swim ${distance} mph`)
    }
}
let myMollusc = new Mollusc("Slippery Eel")
myMollusc.moves(1)
console.log (myMollusc)

