"use strict";
exports.__esModule = true;
// Test configuration
var message = "hellow and welcome back";
console.log(message);
// Primitive type examples
var name = "Rehana";
var student = false;
var teacher = true;
var templateStringSentence = " My name is " + name + ". Am I am a student or a teacher? Student? " + student + " Teacher?" + teacher;
console.log(templateStringSentence);
var fullName = "Jhanavi Basappa";
var age = 16;
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
// Arrays
var list = [1, 2, 3];
var listNumbers = [3, 4, 5];
console.log(list);
console.log(listNumbers);
var listNames = ['Ravi', 'Ravinder', 'Ravindernath'];
console.log(listNames);
var checkBig = [true, false, true];
console.log(checkBig);
// Tuple
var shoppingList = [1, 'milk'];
console.log(shoppingList);
// Enum
var List1;
(function (List1) {
    List1[List1["Milk"] = 0] = "Milk";
    List1[List1["Bread"] = 1] = "Bread";
    List1[List1["Eggs"] = 2] = "Eggs";
})(List1 || (List1 = {}));
var eggs1 = List1.Eggs;
console.log(eggs1);
var List2;
(function (List2) {
    List2[List2["Milk"] = 1] = "Milk";
    List2[List2["Bread"] = 2] = "Bread";
    List2[List2["Marmite"] = 5] = "Marmite";
    List2[List2["Eggs"] = 6] = "Eggs";
})(List2 || (List2 = {}));
var eggs2 = List2.Eggs;
console.log(eggs2);
var List3;
(function (List3) {
    List3[List3["Milk"] = 1] = "Milk";
    List3[List3["Bread"] = 2] = "Bread";
    List3[List3["Eggs"] = 3] = "Eggs";
})(List3 || (List3 = {}));
var eggs3 = List3.Eggs;
console.log(eggs3);
