"use strict";
exports.__esModule = true;
exports.FizzBuzz = void 0;
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz() {
    }
    FizzBuzz.prototype.fizzBuzz = function (num) {
        if (this.isDivisibleBy3(num) && this.isDivisibleBy5(num)) {
            return "FizzBuzz";
        }
        else if (this.isDivisibleBy5(num)) {
            return "Buzz";
        }
        else if (this.isDivisibleBy3(num)) {
            return "Fizz";
        }
        else {
            return "".concat(num);
        }
    };
    FizzBuzz.prototype.isDivisibleBy3 = function (num) {
        return num % 3 == 0;
    };
    FizzBuzz.prototype.isDivisibleBy5 = function (num) {
        return num % 5 == 0;
    };
    return FizzBuzz;
}());
exports.FizzBuzz = FizzBuzz;
