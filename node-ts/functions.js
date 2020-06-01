//  functions are objects with logic all functions are therefore methods of the global object
var user = "George Baker";
function greet(person) {
    return "Hello  " + person + " ";
}
console.log(greet(user));
// returning void
var user1 = "Ma Baker";
function greeter(name) {
    console.log('Hello  + " " + name');
}
console.log(greet(user1));
// Union types -  null and void are good subtypes to use as optional params with the union type notated with the pipe symbol
// Default types -  if you do not want undefined to appear in the log, use a default type of empty string as in the middleName
// Function declaration Udemy Karthik
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
// Function Expression - Anonymous functions are called during runtime with ts they are strictly typed in compile time
var getTeacherTimeTable = function (subject, classNumber) {
    return subject + " Teacher for the " + classNumber + " Standard";
};
console.log(getTeacherTimeTable('Maths', 7));
// Arrow or lambda functions, simplify syntax - implicit return
var getTeacherNameAndTimeTable = function (name, subject, classNumber) {
    return name + " is the " + subject + " Teacher for the " + classNumber + " Standard";
};
console.log(getTeacherNameAndTimeTable('Radikha Bakshi', 'Maths', 7));
var getTeacherNames = function (firstName, lastName) { return firstName + " " + lastName; };
console.log(getTeacherNames('Arthur', 'Chamraj'));
var addTwo = function (num1, num2) { return num1 + num2; };
console.log(addTwo(4, 6));
// single param still needs the parenthesis but mixed type return with method possible 
// '244' returned as string - it does not spell out the number
var addNum = function (num) { return (10 + num).toString(); };
console.log(addNum(234));
var returnNumber = function () { return 10; };
console.log(returnNumber());
// returning void
var returnVoid = function () {
    return console.log("logs nothing");
};
