
import {IStudent} from './interfaces'
import getStudentInfo from './modules'

enum LanguagesWritten {Greek, Polish, Hungarian, Russian}
// Importing an export default - Karthik Udemy
let studentsInfo: IStudent[] = [
    {id: 6, firstName:"Rahul",lastName:"Raja", Age: 32, Sex: "F", Phone: 9999, Email:'rani@ranijhansi.com', Languages: LanguagesWritten[LanguagesWritten.Polish]},
    {id: 7, firstName:"Karan",lastName:"Rani", Age: 21, Sex: "M", Phone: 8888, Email:'raja@rajaram.com', Languages:LanguagesWritten [LanguagesWritten.Greek]},
    {id: 8, firstName:"Kanaka", lastName:"Ruba",Age: 18, Sex: "F", Phone: 7777, Email:'ruby@rubyroo.com', Languages: LanguagesWritten[LanguagesWritten.Russian]},
    {id: 9, firstName:"Raheem",lastName:"Ruby", Age: 16, Sex: "M", Phone: 6666, Email:'ruba@rubaroo.com', Languages: LanguagesWritten[LanguagesWritten.Hungarian]}
]
// the import brings in the results of the array in the imported module
// as well as the array in the module it is imported into
console.log(getStudentInfo(studentsInfo))

// generics
let genericStudentsInfo: Array<IStudent> =[
    {id: 0, firstName:"Rani",lastName:"Raja", Age: 20, Sex: "F", Phone: 1234, Email:'rani@ranijhansi.com', Languages: LanguagesWritten[LanguagesWritten.Russian]},
    {id: 1, firstName:"Raja",lastName:"Rani", Age: 29, Sex: "M", Phone: 4567, Email:'raja@rajaram.com', Languages:LanguagesWritten [LanguagesWritten.Hungarian]},
    {id: 2, firstName:"Ruby", lastName:"Ruba",Age: 5, Sex: "F", Phone: 8910, Email:'ruby@rubyroo.com', Languages: LanguagesWritten[LanguagesWritten.Greek]},
    {id: 3, firstName:"Ruba",lastName:"Ruby", Age: 12, Sex: "M", Phone: 1112, Email:'ruba@rubaroo.com', Languages: LanguagesWritten[LanguagesWritten.Polish]}
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