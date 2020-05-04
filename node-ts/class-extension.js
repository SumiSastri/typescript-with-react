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
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
    }
    Teacher.prototype.greet = function () {
        console.log("Good morning " + this.name + " is logged from Teacher class");
    };
    return Teacher;
}());
var person = new Teacher('Mrs. Petrus');
console.log(person);
console.log(person.greet());
// class extension inherits all the props and methods of the Teacher class
var Highschoolteacher = /** @class */ (function (_super) {
    __extends(Highschoolteacher, _super);
    function Highschoolteacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Highschoolteacher.prototype.greet = function () {
        console.log("Good afternoon " + this.name + " is logged from HighSchoolteacher class");
        _super.prototype.greet.call(this);
    };
    return Highschoolteacher;
}(Teacher));
// instantiate or create a new instance of the extended class
var person1 = new Highschoolteacher("Mrs. Rebello");
console.log(person1);
console.log(person1.greet());
// the function CAN be overwritten as in the extended class
// note how the super calls the method from the Teacher class
var Student = /** @class */ (function () {
    // private fN = fN
    // private lN = lN
    function Student(fN, lN) {
        this.fN = fN;
        this.lN = lN;
    }
    Student.prototype.getFullName = function () {
        console.log("logs " + this.fN + " " + this.lN);
    };
    return Student;
}());
var s1 = new Student("Kisha", "Moorthy");
s1.fN = ("Narain");
s1.lN = ("Murthy");
