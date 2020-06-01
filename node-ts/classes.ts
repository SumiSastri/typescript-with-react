// class declaration
class StudentsPeformance {
    studentName: string
    subject: string
    studentMarks: number
// constructor calling on the object
    constructor (studentName: string, subject: string, studentMarks: number){
        this.studentName = studentName
        this.subject = subject
        this.studentMarks = studentMarks
    }
// methods in classes
    getNameAndMarks(){
        return `In ${this.subject}, ${this.studentName}  achieved ${this.studentMarks} out of a total of 500 points`
    }
}
let sP1 = new StudentsPeformance ("Rohini", "History-Economics-Psychology-Sociology & English", 475)
console.log(sP1.getNameAndMarks())

// demo to show class is actually just a function
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
// console.log(t1,`logs an error as not hoisted`) 
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

