//  Default public
//  Private can not be accessed outside the parent/base class - errors thrown
//  Protected allows access
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
var Car = /** @class */ (function () {
    function Car(carName, numberPlate, mark) {
        this.carName = carName;
        this.numberPlate = numberPlate;
        this.mark = mark;
        console.log("Car name and plate   " + this.carName + " " + this.numberPlate + " " + this.mark);
    }
    Car.prototype.getTopSpeed = function (mph) {
        return this.carName + "top speed is " + mph + "miles/hr";
    };
    Car.prototype.getMark = function (mark) {
        return "" + this.carName + this.numberPlate + " released as Mark" + mark;
    };
    return Car;
}());
var car1 = new Car("Mazda", 241, 5);
console.log(car1);
console.log(car1.getTopSpeed(150));
console.log(car1.getMark(2));
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(carName, numberPlate, mark) {
        return _super.call(this, carName, numberPlate, mark) || this;
    }
    return SportsCar;
}(Car));
var sportscar1 = new SportsCar("Ferrari", 500, 2);
console.log(sportscar1);
console.log(sportscar1.getTopSpeed(200));
console.log(sportscar1.getMark(5));
