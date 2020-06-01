"use strict";
// interfaces - do not show up in the compiled javascript
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
// Rest operator
function getNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log('Number:' + element);
    });
}
getNumbers(1, 2, 3, 4);
// Spread operator
