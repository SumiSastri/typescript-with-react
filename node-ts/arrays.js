"use strict";
exports.__esModule = true;
// Arrays  2 ways of declaring the type
var listNumbers = [3, 4, 5];
console.log("listNumbers: number[]", listNumbers);
var list = [1, 2, 3];
console.log("LOGS: list: Array <number>", list);
var listNames = ['Ravi', 'Ravinder', 'Ravindernath'];
console.log('LOGS: listNames: string[]', listNames);
var listNames2 = ['Bhavana', 'Bhavya', 'Bhavani'];
console.log('LOGS; listNames2:Array<string>', listNames2);
var checkBig = [true, false, true];
console.log('LOGS: checkBig: boolean[]', checkBig);
// mixed types
var listMixedTypes = ["Mixed-Array:", true, 1,];
console.log(listMixedTypes);
var listMixedTypes2 = ["Mixed-Up-Array:", false, 2,];
console.log(listMixedTypes2);
// Karthik Udemy - Array of Objects, using enums in arrays
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["French"] = 1] = "French";
    LanguagesKnown[LanguagesKnown["Italian"] = 2] = "Italian";
    LanguagesKnown[LanguagesKnown["Spanish"] = 3] = "Spanish";
})(LanguagesKnown || (LanguagesKnown = {}));
// interface IStudent{
//     Name: string,
//     Age: number,
//     Sex: string,
//     Phone: number,
//     Email: string,
//     LanguagesKnown:LanguagesKnown
// }
var student = {
    Name: "Anil",
    Age: 5,
    Sex: 'M',
    Phone: 1314,
    Email: "anil@anil.com",
    LanguagesKnown: [LanguagesKnown.Italian]
};
var studentsInfo = [
    { Name: "Rani", Age: 20, Sex: "F", Phone: 1234, Email: 'rani@ranijhansi.com', LanguagesKnown: [LanguagesKnown[0]] },
    { Name: "Raja", Age: 29, Sex: "M", Phone: 4567, Email: 'raja@rajaram.com', LanguagesKnown: [LanguagesKnown[1]] },
    { Name: "Ruby", Age: 5, Sex: "F", Phone: 8910, Email: 'ruby@rubyroo.com', LanguagesKnown: [LanguagesKnown.Italian] },
    { Name: "Ruba", Age: 12, Sex: "M", Phone: 1112, Email: 'ruba@rubaroo.com', LanguagesKnown: [LanguagesKnown.Spanish] }
];
// use an array method
studentsInfo.push(student);
console.log("LOGS: Array of objects:", studentsInfo);
// Looping through an array with a function
function getStudentInfo(students) {
    // let students = [] do not need to declare the variable as it is in the param
    students.forEach(function (student) {
        console.log("Hi I'm " + student.Name + ", I speak " + student.LanguagesKnown + " phone me on: " + student.Phone);
    });
}
getStudentInfo(studentsInfo);
// Function declaration
function studentName(firstName, middleName, lastName) {
    if (middleName === void 0) { middleName = ""; }
    console.log("Hi my name is " + firstName + " " + middleName + " " + lastName);
}
studentName("Ram");
console.log(studentName);
studentName("Ram", "Narayan");
console.log(studentName);
studentName("Ram", "R", "Narayan");
console.log(studentName);
studentName("Ram", "Narayan", "R");
console.log(studentName);
