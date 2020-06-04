"use strict";
exports.__esModule = true;
// strings
var name = "Rehana";
// numbers
var num1 = 10;
var num2 = 20;
var result = 0;
// booleans
var student = false;
var teacher = true;
// template literal
var templateStringSentence = " My name is " + name + ". Am I am a student or a teacher? Student? " + student + " Teacher?" + teacher;
console.log(templateStringSentence);
var fullName = "Jhanavi Basappa";
var age = 16;
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
console.log("logs sentence, " + sentence);
console.log("logs string length, " + sentence.length);
console.log("logs string concat, " + templateStringSentence + " & " + sentence);
// javascript primitives
var n = null;
var u = undefined;
// new typescript primitives
var a = "hi";
console.log("logs a as string " + a);
console.log(a.toUpperCase());
a = 10;
console.log("logs a as number " + a);
a = null;
console.log("logs a as null " + a);
a = undefined;
console.log("logs a as undefined " + a);
a = true;
console.log("logs a as boolean " + a);
//cant call or construct the variable with unknown - this is the subtle difference
var unk = "I do not know if this is a string or a number";
console.log("logs unk as string " + unk);
unk = 10;
console.log("logs unk as number " + unk);
unk = null;
console.log("logs unk as null " + unk);
unk = undefined;
console.log("logs unk as undefined " + unk);
unk = false;
console.log("logs unk as boolean " + unk);
unk = "back to string";
console.log("logs unk as reassigned back to string " + unk);
// the type assertion is required to change unk to a string - uncomment to see error
// type assertion is the same as type casting in other languages and libraries - react uses casting
// console.log(unk.toUpperCase())
console.log(unk.toUpperCase());
// USER DEFINED TYPE GUARDS CodeEvolution @25:00
// function checks if the variable obj returns the variable/param obj as a string
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(unk)) {
    console.log("logs unk.name type guard function " + unk.name);
}
// never & void can not be assigned a value uncomment to see error
// let nev1: never = "should not happen"
var nev;
// let v1: void = " "
var v;
// assignment operators Edureka
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
