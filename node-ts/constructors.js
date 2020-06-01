"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// There are no classes in javascript - look at class.js 
// class Animal is actually function Animal(){} - a function that creates an empty object in the browser memory
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
        console.log("Animal Constructor Method Logged: " + this.name);
    }
    Animal.prototype.walk = function (distance) {
        console.log("Animal Protype Method Logged: Hi my name is " + this.name + " I can walk " + distance + " miles");
    };
    Animal.talk = function (word) {
        console.log("Animal Static Method Logged: I say " + word);
    };
    Animal.prototype.getId = function (id) {
        return id;
    };
    return Animal;
}());
console.log(this, "logs this points to the empty object created in the window/ browser memory");
// { __esModule: true } 'logs this points to the empty object created in the window/ browser memory or in node the _esModule'
console.log(Animal, "logs class Animal");
// { [Function: Animal] talk: [Function] } 'logs class Animal' proves it is a function
// The animal class has been encapsulated, it is instantiated with the new key word
// The new key word creates a new instance of the class
var myAnimal = new Animal("KingKong");
console.log(myAnimal, "logs myAnimal");
myAnimal.walk(20);
Animal.talk("GrrrrorrillaGrowl");
console.log(myAnimal.getId(10));
console.log(this, "logs this after myAnimal");
// { __esModule: true } 'logs this after myAnimal' proves it inherits props and method from the Animal blueprint
// Class extention and inheritance extends the blue print of the animal class
var Insect = /** @class */ (function (_super) {
    __extends(Insect, _super);
    function Insect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Insect;
}(Animal));
var myInsect = new Insect("BizzieBee");
console.log(myInsect);
Insect.talk("Buzzabuzaabeebee");
console.log(myInsect.getId(15));
// The extended class must have the super method, this calls the constructor method of the parent class - Animal first
// Then the reptile constructor method called with super method
// The reptile prototype method can overwrite the Animal prototype method
// Static methods can not be overwritten
var Reptile = /** @class */ (function (_super) {
    __extends(Reptile, _super);
    function Reptile(theName) {
        var _this = _super.call(this, theName) || this;
        console.log("Reptile Constructor Method Logged: " + _this.name);
        return _this;
    }
    // getId(x:number){
    //     return super.getId()
    // }
    Reptile.prototype.walk = function (distance) {
        console.log("Reptile Prototype Method Logged: I crawl so I can walk " + distance + " miles");
    };
    return Reptile;
}(Animal));
var myReptile = new Reptile("Kaa");
myReptile.walk(0);
console.log(myReptile);
Reptile.talk('hisssssssssnake');
console.log(myReptile.getId(14));
// Abstraction - this allows class extention but not modification
// It is designed to be derived from - it is therefore a base class
// The protected props and methods prevent access of these outside the blueprint and ensures the blue print is not changed
var AnimalSpecies = /** @class */ (function () {
    function AnimalSpecies(theName) {
        this.name = theName;
    }
    AnimalSpecies.prototype.moves = function (distance) {
        console.log("Hi my name is " + this.name + " I can move " + distance + " mph");
    };
    return AnimalSpecies;
}());
var Mollusc = /** @class */ (function (_super) {
    __extends(Mollusc, _super);
    function Mollusc(theName) {
        return _super.call(this, theName) || this;
    }
    Mollusc.prototype.moves = function (distance) {
        console.log("I can swim " + distance + " mph");
    };
    return Mollusc;
}(AnimalSpecies));
var myMollusc = new Mollusc("Slippery Eel");
myMollusc.moves(1);
console.log(myMollusc);
