// interfaces - do not show up in the compiled javascript

interface RectangleOptions{
    width: number;
    length: number;
    height?: number;
}

function drawRectangle(options: RectangleOptions){
    let width = options.width
    let length = options.length
    // optional params 
    if (options.height){
        let height = options.height
    }
    // function logic
}
drawRectangle ({
    width: 100,
    length: 200,
    height: 15
    
})


// Classes - look at prototypal inheritance in the javascript file and how classes work under the hood

class Animal {
    // attributes are public by default but need to be declared as private or protected
    private name: string;

    constructor(theName: string){
        this.name = theName
    }
    walk(distance:number){
        console.log(`Hi my name is ${this.name} I can walk ${distance} miles`)
    }
}
// instantiate the constructor method and new instance of the class animal
let myAnimal = new Animal ("KingKong")
myAnimal.walk(20)

// Class extention and inheritance - the properties of the extended class 
// are inherited with the super method that passes the params of the constructor props
// the extended class inherities all the properties and methods of the parent class
// the new extended class can have its own methods and overwrite inherited methods - see walk

class Reptile extends Animal {
    constructor(theName: string){
        super(theName)
    }
    walk(distance:number){
        console.log (`I crawl so I can walk ${distance} miles`)
    }
}
let myReptile = new Reptile("Kaa")
myReptile.walk(0)
console.log (myReptile)

// Abstraction - this allows class extention but not modification

abstract class AnimalSpecies {
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
