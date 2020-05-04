// Lexical this
var x: number = 5
var y: number = x
var x: number = 10
console.log(x,`logs primitive value of x`)
console.log(y, `logs primivite value of y`)

var a = {value:  5}
var b = a
a.value = 10
console.log(a, `logs a as an object`)
console.log(b, `logs b as referenced to the object a`)

// factory function
function createGreet (name: string){
    return {
        name: name,
        greetName: function (){
            console.log (`Hi ${this.name}`)
        }
    }
}
const greet1 = createGreet('John')
console.log(greet1, `logs greet1 and updated createGreet factory function with new name`)
console.log(greet1.greetName(), `logs greet1 and method as undefined`)
const greet2 = createGreet('Xanadu')

//class function
class GreetGeneral{
    firstName: string = "Napolean";
    lastName: string = "Bonaparte"
// this has lost its sense of scope and points to the window - uncomment log to see error
// console.log(this) 
    sayGoodMorning(){
        // work around with self adds to boilerplate
        //  lexical this needs to be added to point to the this.name refers to the GreetGeneral
        //  object/ function/ class/ constructor executing the code in the object
        let self = this
        setTimeout(function (){
        console.log('Good Morning General logs self.lastName in class GreetGeneral' + self.lastName);
    }, 500);
}
}

let greetGeneral = new GreetGeneral()
greetGeneral.sayGoodMorning();
console.log(greetGeneral)

// Lexical this bound by the arrow function
// the compilation of the arrow function transpiles let _this = this
// fat arrow binds set time out to GreetTeacher class, constructor, function, object
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
