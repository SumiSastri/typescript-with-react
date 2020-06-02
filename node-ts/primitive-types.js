"use strict";
exports.__esModule = true;
// Primitive types are strings, numbers, booleans
var name = "Rehana";
var student = false;
var teacher = true;
var templateStringSentence = " My name is " + name + ". Am I am a student or a teacher? Student? " + student + " Teacher?" + teacher;
console.log(templateStringSentence);
var fullName = "Jhanavi Basappa";
var age = 16;
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
console.log("logs sentence, " + sentence);
console.log("logs string length, " + sentence.length);
console.log("logs string concat, " + templateStringSentence + " & " + sentence);
var num1 = 10;
var num2 = 20;
var result = 0;
// assignment operators
result = num1;
console.log("logs simple assignment", result);
result = num1 += num2;
console.log("logs += assignment", result);
result = num1 -= num2;
console.log("logs -= assignment", result);
result = num1 /= num2;
console.log("logs /= assignment", result);
result = num1 *= num2;
console.log("logs *= assignment", result);
// arithmetic operators - examples from Edureka tutorial
result = num1 + num2;
console.log("logs addition", result);
result = num1 - num2;
console.log("logs subtraction", result);
result = num1 * num2;
console.log("logs multiplication", result);
result = num1 / num2;
console.log("logs division", result);
result = num1 % num2;
console.log("logs quotient", result);
// logical operators
var average = 10;
var percentage = 20;
// Bit representation is how many bits in this variable
var answer = true;
answer = (average < 50) && (percentage > 50);
console.log("logs logic with And operator", answer);
answer = (average < 50) || (percentage > 50);
console.log("logs logic with Or operator", answer);
// note the difference with the and and not operators
answer = (average < 50) != (percentage > 50);
console.log("logs logic with Not operator", answer);
answer = (average < 50) != (percentage < 50);
console.log("logs logic with Not operator", answer);
// note that both average and percentage are euqal to 50 so when they actually are equal you get false as the answer
// bitwise operators
var bitwiseResult;
bitwiseResult = (average & percentage);
console.log("logs bitwise with And operator", bitwiseResult);
bitwiseResult = (average | percentage);
console.log("logs bitwise with Or operator", bitwiseResult);
// bitwiseResult = (average ~ percentage)
// console.log(`logs bitwise with Not operator`, bitwiseResult)
