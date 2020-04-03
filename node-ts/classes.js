// interfaces - do not show up in the compiled javascript
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
function drawRectangle(options) {
    var width = options.width;
    var length = options.length;
    // optional params 
    if (options.height) {
        var height = options.height;
    }
    // function logic
}
drawRectangle({
    width: 100,
    length: 200,
    height: 15
});
// Classes - look at prototypal inheritance in the javascript file and how classes work under the hood
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("Hi my name is " + this.name + " I can walk " + distance + " miles");
    };
    return Animal;
}());
// instantiate the constructor method and new instance of the class animal
var myAnimal = new Animal("KingKong");
myAnimal.walk(20);
// Class extention and inheritance - the properties of the extended class 
// are inherited with the super method that passes the params of the constructor props
// the extended class inherities all the properties and methods of the parent class
// the new extended class can have its own methods and overwrite inherited methods - see walk
var Reptile = /** @class */ (function (_super) {
    __extends(Reptile, _super);
    function Reptile(theName) {
        return _super.call(this, theName) || this;
    }
    Reptile.prototype.walk = function (distance) {
        console.log("I crawl so I can walk " + distance + " miles");
    };
    return Reptile;
}(Animal));
var myReptile = new Reptile("Kaa");
myReptile.walk(0);
console.log(myReptile);
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
