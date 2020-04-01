//  functions
let user = "George Baker"
function greet(person:string){
    return `Hello  ${person} `
}
console.log(greet(user))

// returning void

let user1 = "Ma Baker"
function greeter (name:string): void{
    console.log ('Hello  + " " + name') 
}

// Optional parameters - place last - they will also be called last
// Union types -  null and void are good subtypes to use as optional params with the union type notated with the pipe symbol
// Default types -  if you do not want undefined to appear in the log, use a default type of empty string as in the middleName

function fullName(firstName: string, middleName: string ="", lastName?: string | undefined | null ): void{
    console.log (`Hi my name is ${firstName} ${middleName} ${lastName}`)
}
fullName("Ram")
console.log(fullName)

fullName ("Ram", "Narayan")
console.log(fullName)

fullName("Ram", "R", "Narayan")
console.log(fullName)

fullName("Ram", "Narayan", "R")
console.log(fullName)

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

// Lexical this and arrow functions

class GreetTeacher{
    firstName: string = "Napolean";
    lastName: string = "Bonaparte"

    sayGoodMorning(){
        setTimeout(function (){
        console.log('Good Morning Mr. + this.lastName');
    }, 500);
}
}

let greetTeacher = new GreetTeacher()
greetTeacher.sayGoodMorning();