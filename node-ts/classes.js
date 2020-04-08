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
// classes are special types of functions
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p1 = new Person;
console.log(typeof Person);
// functions are hoisted you can call the function before it is declared
employee();
function employee() { console.log("Hi Sam"); }
employee();
// classes can not be called before they are declared
// on compile it will throw the error Block-scoped variable 't1' used before its declaration.
// console.log(t1) NOT HOISTED
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
var t1 = new Teacher;
console.log(t1);
// adding a method to a class follows prototypal inheritance of objects and will log as true
var Greet = /** @class */ (function () {
    function Greet() {
    }
    Greet.prototype.greetTeacher = function () { };
    return Greet;
}());
var g1 = new Greet;
console.log(g1.greetTeacher === Greet.prototype.greetTeacher);
// function declaration using the class key word 
// the class body can only contain methods not properties
// the constructor method - creates and initalises an object - there can only be one constructor in every class 
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
var myAnimal = new Animal("KingKong");
myAnimal.walk(20);
Animal.talk("GrrrrorrillaGrowl");
console.log(myAnimal.getId(10));
// Class extention and inheritance - static & constructor methods logged even though this class does not have either 
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
// Lexical this 
var GreetGeneral = /** @class */ (function () {
    function GreetGeneral() {
        this.firstName = "Napolean";
        this.lastName = "Bonaparte";
    }
    // this has lost its sense of scope and points to the window
    GreetGeneral.prototype.sayGoodMorning = function () {
        // work around with self adds to boilerplate
        var self = this;
        setTimeout(function () {
            console.log('Good Morning General ' + self.lastName);
        }, 500);
    };
    return GreetGeneral;
}());
var greetGeneral = new GreetGeneral();
greetGeneral.sayGoodMorning();
console.log(greetGeneral);
// Lexical this bound by the arrow function
// the compilation of the arrow function transpiles let _this = this
var GreetTeacher = /** @class */ (function () {
    function GreetTeacher() {
        this.firstName = "Josephine";
        this.lastName = "Bonaparte";
    }
    GreetTeacher.prototype.sayGoodMorning = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Good Morning Miss  " + _this.lastName);
        }, 500);
    };
    return GreetTeacher;
}());
var greetTeacher = new GreetTeacher();
greetTeacher.sayGoodMorning();
console.log(greetTeacher);
