function getNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    numbers.forEach(function (number) {
        console.log("Number: " + number);
    });
}
getNumbers(1, 2, 3, 4, 5, 6);
