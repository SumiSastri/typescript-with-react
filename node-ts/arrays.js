"use strict";
exports.__esModule = true;
// Arrays  2 ways of declaring the type
var listNumbers = [3, 4, 5];
listNumbers.push(7);
console.log("listNumbers: number[]", listNumbers);
console.log("logs push method, " + listNumbers.push());
var list = [1, 2, 3];
console.log("LOGS: list: Array <number>", list);
var listNames = ['Ravi', 'Ravinder', 'Ravindernath'];
console.log('LOGS: listNames: string[]', listNames);
console.log("logs reverse method, " + listNames.reverse());
var listNames2 = ['Bhavana', 'Bhavya', 'Bhavani'];
console.log('LOGS; listNames2:Array<string>', listNames2);
console.log("logs sort method, " + listNames2.sort());
console.log('LOGS: listNames: string[]', listNames);
var checkBig = [true, false, true];
console.log('LOGS: checkBig: boolean[]', checkBig);
// mixed types
var listMixedTypes = ["Mixed-Array:", true, 1,];
console.log(listMixedTypes);
var listMixedTypes2 = ["Mixed-Up-Array:", false, 2,];
console.log(listMixedTypes2);
// Karthik Udemy - Array of Objects, using enums in arrays
//enum declaration
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["French"] = 1] = "French";
    LanguagesKnown[LanguagesKnown["Italian"] = 2] = "Italian";
    LanguagesKnown[LanguagesKnown["Spanish"] = 3] = "Spanish";
})(LanguagesKnown || (LanguagesKnown = {}));
// object declaration
var student = {
    Name: "Anil",
    Age: 5,
    Sex: 'M',
    Phone: 1314,
    Email: "anil@anil.com",
    Languages: [LanguagesKnown.Italian]
};
var studentsInfo = [
    { Name: "Rani", Age: 20, Sex: "F", Phone: 1234, Email: 'rani@ranijhansi.com', Languages: [LanguagesKnown[0]] },
    { Name: "Raja", Age: 29, Sex: "M", Phone: 4567, Email: 'raja@rajaram.com', Languages: [LanguagesKnown[1]] },
    { Name: "Ruby", Age: 5, Sex: "F", Phone: 8910, Email: 'ruby@rubyroo.com', Languages: [LanguagesKnown.Italian] },
    { Name: "Ruba", Age: 12, Sex: "M", Phone: 1112, Email: 'ruba@rubaroo.com', Languages: [LanguagesKnown.Spanish] }
];
// use an array method
studentsInfo.push(student);
console.log("LOGS: Array of objects:", studentsInfo);
// Looping through an array with a function
function getStudentInfo(students) {
    // let students = [] do not need to declare the variable as it is in the param
    students.forEach(function (student) {
        console.log("Hi I am " + student.Name + ", I speak " + student.Languages + " phone me on: " + student.Phone);
    });
}
getStudentInfo(studentsInfo);
