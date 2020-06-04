import {IPerson} from "../node-ts/interfaces"

// function creates a person empty object Code Evolution @37:00
function personName(person: {id: number, firstName: string, lastName:string}){
    console.log(` ${person.id})  ${person.firstName} ${person.lastName}`)
}
// assign the empty object's params values and store in a variable
let p = {
    id: 1, 
    firstName: "Janice", 
    lastName: "Joplin"
}
// call the function
console.log(personName(p))

// when more than 3 properties in an object, refactor and abstract the props/values of the object
// Create abstract and create both classes and interfaces
// Interfaces are the type values and classes are the blue print object whose properties can be extended

function personName2(person2: IPerson){
    console.log(`${person2.id})  ${person2.firstName} ${person2.lastName}`)
}
// assign the empty object's params values and store in a variable
let p2 = {
    id: 2, 
    firstName: "Scott", 
    lastName: "Joplin"
}
// call the function
console.log(personName(p2))