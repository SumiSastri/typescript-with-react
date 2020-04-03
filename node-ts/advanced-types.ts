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
console.log(greet(user1))

// function declaration
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

// Rest param
function getNumbers(...nums: number[]){
    nums.forEach(element => {
        console.log('Number:' + element)
    })
}
getNumbers(1,2,3,4)

// Anonymous functions

let getTeacherTimeTable = function (subject:string, classNumber: number) {
    return `${subject} Teacher for the ${classNumber} Standard` 
}
console.log (getTeacherTimeTable('Maths', 7))

// Arrow or lambda functions

let getTeacherNameAndTimeTable = (name: string, subject:string, classNumber: number) =>
{ return `${name} is the ${subject} Teacher for the ${classNumber} Standard` } 

console.log(getTeacherNameAndTimeTable('Radikha Bakshi', 'Maths', 7))

let getTeacherNames = (firstName:string, lastName: string) => {
    return `${firstName} ${lastName}` 
}
console.log (getTeacherNames('Arthur', 'Chamraj'))