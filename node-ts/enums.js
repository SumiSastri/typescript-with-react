"use strict";
exports.__esModule = true;
// Enums add numeric values to an object
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
// Udemy Karthik - defines a named numeric constant as an object - it is zero indexed
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["French"] = 1] = "French";
    LanguagesKnown[LanguagesKnown["Italian"] = 2] = "Italian";
    LanguagesKnown[LanguagesKnown["Spanish"] = 3] = "Spanish";
})(LanguagesKnown = exports.LanguagesKnown || (exports.LanguagesKnown = {}));
console.log("Logs the enum", LanguagesKnown);
console.log("Logs 3 in the enum:", LanguagesKnown[3]);
