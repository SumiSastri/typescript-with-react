"use strict";
exports.__esModule = true;
var enums_1 = require("../node-ts/enums");
// for loop 3 params or condition expressions - initial value, condition, increment or decrement(Edureka tutorial)
for (var i_1 = 0; i_1 < 3; i_1++) {
    console.log("logs for-loop iterations on " + i_1);
}
//  while loop, executes code while the condition expression is true stops when it is false
var i = 0;
while (i < 5) {
    console.log("logs while-loop " + i);
    i++;
}
// do-while execute the code block in the do section while the condition expression remains true break & continue
var index = 0;
do {
    console.log("logs do-while-loop " + index);
    index++;
} while (index < 2);
// break and continue the loop
// forEach loops over each element (Karthik Tutorial)
// imported the enum to refactor
var student = {
    Name: "Anil",
    Age: 5,
    Sex: 'M',
    Phone: 1314,
    Email: "anil@anil.com",
    Languages: [enums_1.LanguagesKnown.Italian]
};
var studentsInfo = [
    { Name: "Rani", Age: 20, Sex: "F", Phone: 1234, Email: 'rani@ranijhansi.com', Languages: [enums_1.LanguagesKnown[0]] },
    { Name: "Raja", Age: 29, Sex: "M", Phone: 4567, Email: 'raja@rajaram.com', Languages: [enums_1.LanguagesKnown[1]] },
    { Name: "Ruby", Age: 5, Sex: "F", Phone: 8910, Email: 'ruby@rubyroo.com', Languages: [enums_1.LanguagesKnown.Italian] },
    { Name: "Ruba", Age: 12, Sex: "M", Phone: 1112, Email: 'ruba@rubaroo.com', Languages: [enums_1.LanguagesKnown.Spanish] }
];
// Looping through an array with a function
function getStudentInfo(students) {
    // let students = [] do not need to declare the variable as it is in the param
    students.forEach(function (student) {
        console.log("Logs forEach-Loop: Hi I'm " + student.Name + ", I speak " + student.LanguagesKnown + " phone me on: " + student.Phone);
    });
}
getStudentInfo(studentsInfo);
// iterating over the keys in an object to find props and methods (Moshe Tutorial)
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw circle with radius');
    };
}
var circle = new Circle(10);
console.log(circle);
console.log(circle.draw());
for (var key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key], "logs keys with for-in loops over obj keys");
}
var keys = Object.keys(circle);
console.log(keys, "logs props & methods as an array with Object.keys() method");
if ('radius' in circle) {
    console.log('finds props only or methods only with the in operator');
}
