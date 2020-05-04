// classes are special types of functions with the class key word
class Person{}
console.log(Person, `logs class Person we see it is a function`)
let p1 = new Person
console.log(typeof Person)

// functions are hoisted you can call the function before it is declared
employee()
function employee(){ console.log(`logs greeting to employee function Hi Sam before hoisted`)}
employee()

// classes can not be called before they are declared
// on compile it will throw the error Block-scoped variable 't1' used before its declaration.
//  uncomment this console log to demonstrate
// console.log(t1) 
class Teacher{}
let t1 = new Teacher
console.log(t1, `logs class Teacher as a function`)

// the class body can only contain methods not properties
// adding a method to a class follows prototypal inheritance of objects and will log as true
class Greet{
    greetTeacher(){}
}
let g1 = new Greet
console.log(g1.greetTeacher === Greet.prototype.greetTeacher)

// Greet.call()
// Greet.bind()
// Greet.apply()