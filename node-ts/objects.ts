// Encapsulation - type of object with properties assigned types
// Each object literal has a type and a value

let firstName: string ="Janet"
let lastName: string = "Pink"
let person = {
    firstName: firstName,
    lastName: lastName
}
console.log(person.firstName, `LOG: person.firstName`)
console.log(person.lastName, `LOG: person.lastName`)
console.log(person, `LOG: person as object literal`)

// ES2015 - looks like json notation - prop of teacher has a space and enclosed in quotes
let fN = "first name"
let lN = "last name";
let teacher = {
    "first name": "Scarlet",
    [lN] : "o'Hara"
}
console.log(teacher, `LOG: teacher as object literal`)
console.log(teacher["first name"], `LOG teacher["first name]`)
console.log(teacher[fN], `LOG teacher[fN] `)
console.log(teacher[lN], `LOG teacher [lN]`)

// if the type name and the property name are the same, the prop type does not need to be re-declared in the encapsulation

let firstName1: string = "Janice"
let lastName1: string = "Purple"
let person1 = {
    firstName1,
    lastName1
}
console.log(person1.firstName1, `logs reassigned person object to person1 object`)

// object - inheritance once object properties and methods encapsulated they are inhereted by 

let studentfName: string ="Asha"
let studentlName: string = "Tamasha"
let student = {
    studentfName,
    studentlName
}
console.log(student, `logs student Asha Tamasha as original object literal`)

function createStudentRecord (studentfName: string, studentlName: string, age:number ) {
    let studentFullName =`${studentfName} ${studentlName}`
    return {
        studentfName,
        studentlName,
        studentFullName,
        isInHighSchool(){ return  age>14}
    }
}
let student1 = createStudentRecord ("Preethi", "Patel", 8)
console.log (student1, `logs reassigned student Asha Tamasha to student1 with Preethi Patel values` )

console.log(student1.studentfName, `logs student1 first name`)
console.log(student1.studentlName, `logs student1 last name`)
console.log(student1.studentFullName, `logs the method that returns student1 full name`)
console.log(student1.isInHighSchool(), `logs the method to check if student1 is in high school`)

let student2 = createStudentRecord ("Nalini", "Ramseshan", 16)
console.log(student2, `logs Nalini Ramaseshan's values as student 2 object with all the inherited methods`)
console.log(student2.studentfName, `logs inherited first name property`)
console.log(student2.studentlName, `logs inherited last name property`)
console.log(student2.studentFullName, `logs inherited method creating full name`)
console.log(student2.isInHighSchool(), `logs inherited method checking if student is in high school`)
