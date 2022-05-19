"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzz1 = exports.FizzBuzz = void 0;
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz(n) {
        var isFizz = n % 5 == 0;
        var isBuzz = n % 3 == 0;
        if (isBuzz && isBuzz) {
            this.message = 'FizzBuzz';
        }
        else if (isFizz) {
            this.message = 'Fizz';
        }
        else if (isBuzz) {
            this.message = 'Buzz';
        }
        else {
            this.message = n + '';
        }
    }
    return FizzBuzz;
}());
exports.FizzBuzz = FizzBuzz;
var FizzBuzz1 = /** @class */ (function () {
    function FizzBuzz1(n) {
        var isBuzz = n % 3 == 0;
        var isFizz = n % 5 == 0;
        if (isBuzz && isFizz) {
            this.message = 'FizzBuzz';
        }
        else if (isFizz) {
            this.message = 'Fizz';
        }
        else if (isBuzz) {
            this.message = 'Buzz';
        }
        else {
            this.message = n + '';
        }
    }
    return FizzBuzz1;
}());
exports.FizzBuzz1 = FizzBuzz1;
