import { string } from "prop-types"

// Arrays  2 ways of declaring the type
let listNumbers: number[] = [3,4,5]
console.log("listNumbers: number[]",listNumbers)
let list: Array <number> = [1,2,3]
console.log("LOGS: list: Array <number>", list)

let listNames: string[] = ['Ravi', 'Ravinder', 'Ravindernath']
console.log('LOGS: listNames: string[]',listNames)
let listNames2:Array<string> = ['Bhavana', 'Bhavya', 'Bhavani']
console.log('LOGS; listNames2:Array<string>',listNames2)

let checkBig: boolean[] = [true, false, true]
console.log('LOGS: checkBig: boolean[]', checkBig)

// mixed types
let listMixedTypes: any [] = ["Mixed-Array:", true, 1, ]
console.log (listMixedTypes)
let listMixedTypes2: Array<any> = ["Mixed-Up-Array:", false, 2, ]
console.log (listMixedTypes2)

// Karthik Udemy - Array of Objects, using enums in arrays

enum LanguagesKnown {English, French, Italian, Spanish}
let student1 = {
    Name: "Anil",
    Age: 5,
    Sex: 'M',
    Phone: 1314,
    Email: "anil@anil.com",
    LanguagesKnown: [LanguagesKnown.Italian]
}
let studentsInfo = [
    {Name:"Rani", Age: 20, Sex: "F", Phone: 1234, Email:'rani@ranijhansi.com', LanguagesKnown: [LanguagesKnown[0]]},
    {Name:"Raja", Age: 29, Sex: "M", Phone: 4567, Email:'raja@rajaram.com', LanguagesKnown: [LanguagesKnown[1]]},
    {Name:"Ruby", Age: 5, Sex: "F", Phone: 8910, Email:'ruby@rubyroo.com', LanguagesKnown: [LanguagesKnown.Italian]},
    {Name:"Ruba", Age: 12, Sex: "M", Phone: 1112, Email:'ruba@rubaroo.com', LanguagesKnown: [LanguagesKnown.Spanish]}
]
// use an array method
studentsInfo.push(student1)
console.log("LOGS: Array of objects:", studentsInfo )

// Looping through an array with a function
function getStudentInfo(students: any[]){
    // let students = []
    students.forEach(student => {
        console.log(`Hi I'm ${student.Name}, I speak ${student.LanguagesKnown} phone me on: ${student.Phone}`)    
    });
}
getStudentInfo(studentsInfo)

