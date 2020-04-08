// object literal - assign the object to a variable

let firstName: string ="Janet"
let lastName: string = "Pink"
let person = {
    firstName: firstName,
    lastName: lastName
}
console.log(person.firstName)
console.log(person.lastName)

// if the variable and prop of the object the same, key value pair not needed as it infers the type from the hoisted variable

let firstName1: string ="Janice"
let lastName1: string = "Purple"
let person1 = {
    firstName1,
    lastName1
}
console.log(person1.firstName1)
console.log(person1.lastName1)

// object with methods

let studentfName: string =""
let studentlName: string = ""
let student = {
    studentfName,
    studentlName
}
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
console.log(student1.studentfName)
console.log(student1.studentlName)
console.log(student1.studentFullName)
console.log(student1.isInHighSchool())

let student2 = createStudentRecord ("Nalini", "Ramseshan", 16)
console.log(student2.studentfName)
console.log(student2.studentlName)
console.log(student2.studentFullName)
console.log(student2.isInHighSchool())


// ES2015 - looks like json notation - prop of teacher has a space and enclosed in quotes, console log in square brackets

let lN = "last name";
let teacher = {
    "first name": "Scarlet",
    [lN] : "o'Hara"
}
console.log(teacher)
console.log(teacher["first name"])
console.log(teacher[lN])