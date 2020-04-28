// classes are special types of functions
class Person{}
let p1 = new Person
console.log(typeof Person)

// functions are hoisted you can call the function before it is declared
employee()
function employee(){ console.log(`Hi Sam`)}
employee()

// classes can not be called before they are declared
// on compile it will throw the error Block-scoped variable 't1' used before its declaration.

// console.log(t1) NOT HOISTED
class Teacher{}
let t1 = new Teacher
console.log(t1)

// adding a method to a class follows prototypal inheritance of objects and will log as true
class Greet{
    greetTeacher(){}
}
let g1 = new Greet
console.log(g1.greetTeacher === Greet.prototype.greetTeacher)

// function declaration using the class key word 
// the class body can only contain methods not properties
// the constructor method - creates and initalises an object - there can only be one constructor in every class 
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
let myAnimal = new Animal ("KingKong")
myAnimal.walk(20)
Animal.talk("GrrrrorrillaGrowl")
console.log(myAnimal.getId(10))

// Class extention and inheritance - static & constructor methods logged even though this class does not have either 
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

// Lexical this 
class GreetGeneral{
    firstName: string = "Napolean";
    lastName: string = "Bonaparte"
// this has lost its sense of scope and points to the window
    sayGoodMorning(){
        // work around with self adds to boilerplate
        let self = this
        setTimeout(function (){
        console.log('Good Morning General ' + self.lastName);
    }, 500);
}
}

let greetGeneral = new GreetGeneral()
greetGeneral.sayGoodMorning();
console.log(greetGeneral)

// Lexical this bound by the arrow function
// the compilation of the arrow function transpiles let _this = this
class GreetTeacher{
    firstName: string = "Josephine";
    lastName: string = "Bonaparte"

    sayGoodMorning(){
    setTimeout(() => {
        console.log(`Good Morning Miss  ${this.lastName}`);
    }, 500);
}
    }
   let greetTeacher = new GreetTeacher()
greetTeacher.sayGoodMorning();
console.log(greetTeacher)
