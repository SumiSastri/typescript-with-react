//  functions
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
// function declaration
// Optional parameters - place last - they will also be called last
// Union types -  null and void are good subtypes to use as optional params with the union type notated with the pipe symbol
// Default types -  if you do not want undefined to appear in the log, use a default type of empty string as in the middleName
function fullName(firstName, middleName, lastName) {
    if (middleName === void 0) { middleName = ""; }
    console.log("Hi my name is " + firstName + " " + middleName + " " + lastName);
}
fullName("Ram");
console.log(fullName);
fullName("Ram", "Narayan");
console.log(fullName);
fullName("Ram", "R", "Narayan");
console.log(fullName);
fullName("Ram", "Narayan", "R");
console.log(fullName);
// Rest param
function getNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log('Number:' + element);
    });
}
getNumbers(1, 2, 3, 4);
// Anonymous functions
var getTeacherTimeTable = function (subject, classNumber) {
    return subject + " Teacher for the " + classNumber + " Standard";
};
console.log(getTeacherTimeTable('Maths', 7));
// Arrow or lambda functions
var getTeacherNameAndTimeTable = function (name, subject, classNumber) { return name + " is the " + subject + " Teacher for the " + classNumber + " Standard"; };
console.log(getTeacherNameAndTimeTable('Radikha Bakshi', 'Maths', 7));
var getTeacherNames = function (firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(getTeacherNames('Arthur', 'Chamraj'));
