// import the interface
import {IStudent} from './interfaces'

//enum declaration
enum LanguagesSpoken {English, French, Italian, Spanish}

// object declaration now assigned to the interface imported
let student: IStudent = {
    id: 4,
    firstName: "Anil",
    lastName: "Mehta",
    Age: 5,
    Sex: 'M',
    Phone: 1314,
    Email: "anil@anil.com",
    Languages: LanguagesSpoken[LanguagesSpoken.Italian]
}
// assign the array to the interface type imported
let studentsInfo: IStudent[] = [
    {id: 0, firstName:"Rani",lastName:"Raja", Age: 20, Sex: "F", Phone: 1234, Email:'rani@ranijhansi.com', Languages: LanguagesSpoken[LanguagesSpoken[0]]},
    {id: 1, firstName:"Raja",lastName:"Rani", Age: 29, Sex: "M", Phone: 4567, Email:'raja@rajaram.com', Languages:LanguagesSpoken [LanguagesSpoken[1]]},
    {id: 2, firstName:"Ruby", lastName:"Ruba",Age: 5, Sex: "F", Phone: 8910, Email:'ruby@rubyroo.com', Languages: LanguagesSpoken[LanguagesSpoken.Italian]},
    {id: 3, firstName:"Ruba",lastName:"Ruby", Age: 12, Sex: "M", Phone: 1112, Email:'ruba@rubaroo.com', Languages: LanguagesSpoken[LanguagesSpoken.Spanish]}
]
// use an array method
studentsInfo.push(student)
console.log("LOGS: Array of objects:", studentsInfo )

// Looping through an array assigning the exact interface type and exporting it as a default
export default function getStudentInfo (students: IStudent[]){
    // let students = [] do not need to declare the variable as it is in the param
    students.forEach(student => {
        console.log(`Hi I'm ${student.firstName}, I speak ${student.Languages} phone me on: ${student.Phone}`)    
    });
}
getStudentInfo(studentsInfo)
