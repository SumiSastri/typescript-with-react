"use strict";
exports.__esModule = true;
var modules_1 = require("./modules");
var LanguagesWritten;
(function (LanguagesWritten) {
    LanguagesWritten[LanguagesWritten["Greek"] = 0] = "Greek";
    LanguagesWritten[LanguagesWritten["Polish"] = 1] = "Polish";
    LanguagesWritten[LanguagesWritten["Hungarian"] = 2] = "Hungarian";
    LanguagesWritten[LanguagesWritten["Russian"] = 3] = "Russian";
})(LanguagesWritten || (LanguagesWritten = {}));
// Importing an export default - Karthik Udemy
var studentsInfo = [
    { id: 0, firstName: "Rahul", lastName: "Raja", Age: 20, Sex: "F", Phone: 9999, Email: 'rani@ranijhansi.com', Languages: LanguagesWritten[LanguagesWritten.Polish] },
    { id: 1, firstName: "Karan", lastName: "Rani", Age: 29, Sex: "M", Phone: 8888, Email: 'raja@rajaram.com', Languages: LanguagesWritten[LanguagesWritten.Greek] },
    { id: 2, firstName: "Kanaka", lastName: "Ruba", Age: 5, Sex: "F", Phone: 7777, Email: 'ruby@rubyroo.com', Languages: LanguagesWritten[LanguagesWritten.Russian] },
    { id: 3, firstName: "Raheem", lastName: "Ruby", Age: 12, Sex: "M", Phone: 6666, Email: 'ruba@rubaroo.com', Languages: LanguagesWritten[LanguagesWritten.Hungarian] }
];
console.log(modules_1["default"](studentsInfo));
// generics
var genericStudentsInfo = [
    { id: 0, firstName: "Rani", lastName: "Raja", Age: 20, Sex: "F", Phone: 1234, Email: 'rani@ranijhansi.com', Languages: LanguagesWritten[LanguagesWritten.Russian] },
    { id: 1, firstName: "Raja", lastName: "Rani", Age: 29, Sex: "M", Phone: 4567, Email: 'raja@rajaram.com', Languages: LanguagesWritten[LanguagesWritten.Hungarian] },
    { id: 2, firstName: "Ruby", lastName: "Ruba", Age: 5, Sex: "F", Phone: 8910, Email: 'ruby@rubyroo.com', Languages: LanguagesWritten[LanguagesWritten.Greek] },
    { id: 3, firstName: "Ruba", lastName: "Ruby", Age: 12, Sex: "M", Phone: 1112, Email: 'ruba@rubaroo.com', Languages: LanguagesWritten[LanguagesWritten.Polish] }
];
// Looping through an array assigning the exact interface type
function getGenericStudentInfo(students) {
    // let students = [] do not need to declare the variable as it is in the param
    students.forEach(function (student) {
        console.log("Hi I'm " + student.firstName + ", I can read, write and speak " + student.Languages + " phone me on: " + student.Phone);
    });
}
getGenericStudentInfo(genericStudentsInfo);
// function identity<T>(arg:T):T {
//     return arg;
// }
// let a = identity(arg: "stringType");
// let b = identity<number>(arg: 0);
// let c = identity<number>(arg: "stringType");
// let d = identity<boolean>(arg: true);
