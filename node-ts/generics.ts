
import {IStudent} from './interfaces'

enum LanguagesWritten {English, French, Italian, Spanish}
// Non generic - Karthik Udemy
// let studentsInfo: IStudent[] = [
//     {id: 0, firstName:"Rani",lastName:"Raja", Age: 20, Sex: "F", Phone: 1234, Email:'rani@ranijhansi.com', Languages: LanguagesWritten[LanguagesWritten.French]},
//     {id: 1, firstName:"Raja",lastName:"Rani", Age: 29, Sex: "M", Phone: 4567, Email:'raja@rajaram.com', Languages:LanguagesWritten [LanguagesWritten.English]},
//     {id: 2, firstName:"Ruby", lastName:"Ruba",Age: 5, Sex: "F", Phone: 8910, Email:'ruby@rubyroo.com', Languages: LanguagesWritten[LanguagesWritten.English]},
//     {id: 3, firstName:"Ruba",lastName:"Ruby", Age: 12, Sex: "M", Phone: 1112, Email:'ruba@rubaroo.com', Languages: LanguagesWritten[LanguagesWritten.English]}
// ]

let genericStudentsInfo: Array<IStudent> =[
    {id: 0, firstName:"Rani",lastName:"Raja", Age: 20, Sex: "F", Phone: 1234, Email:'rani@ranijhansi.com', Languages: LanguagesWritten[LanguagesWritten.French]},
    {id: 1, firstName:"Raja",lastName:"Rani", Age: 29, Sex: "M", Phone: 4567, Email:'raja@rajaram.com', Languages:LanguagesWritten [LanguagesWritten.Spanish]},
    {id: 2, firstName:"Ruby", lastName:"Ruba",Age: 5, Sex: "F", Phone: 8910, Email:'ruby@rubyroo.com', Languages: LanguagesWritten[LanguagesWritten.Italian]},
    {id: 3, firstName:"Ruba",lastName:"Ruby", Age: 12, Sex: "M", Phone: 1112, Email:'ruba@rubaroo.com', Languages: LanguagesWritten[LanguagesWritten.English]}
]

// Looping through an array assigning the exact interface type
function getGenericStudentInfo(students:Array<IStudent> ){
    // let students = [] do not need to declare the variable as it is in the param
    students.forEach(student => {
        console.log(`Hi I'm ${student.firstName}, I can read, write and speak ${student.Languages} phone me on: ${student.Phone}`)    
    });
}
getGenericStudentInfo(genericStudentsInfo)




// function identity<T>(arg:T):T {
//     return arg;
// }

// let a = identity(arg: "stringType");
// let b = identity<number>(arg: 0);
// let c = identity<number>(arg: "stringType");
// let d = identity<boolean>(arg: true);