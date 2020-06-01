"use strict";
exports.__esModule = true;
//enum declaration
var LanguagesSpoken;
(function (LanguagesSpoken) {
    LanguagesSpoken[LanguagesSpoken["English"] = 0] = "English";
    LanguagesSpoken[LanguagesSpoken["French"] = 1] = "French";
    LanguagesSpoken[LanguagesSpoken["Italian"] = 2] = "Italian";
    LanguagesSpoken[LanguagesSpoken["Spanish"] = 3] = "Spanish";
})(LanguagesSpoken || (LanguagesSpoken = {}));
// object declaration now assigned to the interface imported
var student = {
    id: 4,
    firstName: "Anil",
    lastName: "Mehta",
    Age: 5,
    Sex: 'M',
    Phone: 1314,
    Email: "anil@anil.com",
    Languages: LanguagesSpoken[LanguagesSpoken.Italian]
};
// assign the array to the interface type imported
var studentsInfo = [
    { id: 0, firstName: "Rani", lastName: "Raja", Age: 20, Sex: "F", Phone: 1234, Email: 'rani@ranijhansi.com', Languages: LanguagesSpoken[LanguagesSpoken[0]] },
    { id: 1, firstName: "Raja", lastName: "Rani", Age: 29, Sex: "M", Phone: 4567, Email: 'raja@rajaram.com', Languages: LanguagesSpoken[LanguagesSpoken[1]] },
    { id: 2, firstName: "Ruby", lastName: "Ruba", Age: 5, Sex: "F", Phone: 8910, Email: 'ruby@rubyroo.com', Languages: LanguagesSpoken[LanguagesSpoken.Italian] },
    { id: 3, firstName: "Ruba", lastName: "Ruby", Age: 12, Sex: "M", Phone: 1112, Email: 'ruba@rubaroo.com', Languages: LanguagesSpoken[LanguagesSpoken.Spanish] }
];
// use an array method
studentsInfo.push(student);
console.log("LOGS: Array of objects:", studentsInfo);
// Looping through an array assigning the exact interface type and exporting it as a default
function getStudentInfo(students) {
    // let students = [] do not need to declare the variable as it is in the param
    students.forEach(function (student) {
        console.log("Hi I'm " + student.firstName + ", I speak " + student.Languages + " phone me on: " + student.Phone);
    });
}
exports["default"] = getStudentInfo;
getStudentInfo(studentsInfo);
