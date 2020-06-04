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
var Professor = /** @class */ (function () {
    function Professor(id, firstName, lastName, grade, salary) {
        this.id = id,
            this.firstName = firstName,
            this.lastName = lastName,
            this.grade = grade,
            this.salary = salary;
    }
    Professor.prototype.getSalary = function () {
        return this.id + ") " + this.firstName + " " + this.lastName + " gross annual salary is " + (this.grade * this.salary) * 12;
    };
    return Professor;
}());
var prof1 = new Professor(1, "Fred", "Kapner", 8, 5000);
console.log(prof1);
console.log("logs prof1 salary, " + prof1.getSalary());
var Lecturer = /** @class */ (function (_super) {
    __extends(Lecturer, _super);
    function Lecturer(id, firstName, lastName, grade, salary) {
        return _super.call(this, id, firstName, lastName, grade, salary) || this;
    }
    Lecturer.prototype.salarySacrifice = function () {
        return "Lect. " + this.id + ") " + this.firstName + " " + this.lastName + " sacrifices " + ((this.grade * this.salary) * 10 / 100) * 12 + " of his salary for his pension";
    };
    return Lecturer;
}(Professor));
var lect1 = new Lecturer(1, "Paul", "Krugman", 9, 6000);
console.log(lect1);
console.log("logs lect1 salary, " + lect1.getSalary());
console.log(lect1.salarySacrifice());
