"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
describe("add a function basic calculator", function () {
    var calt = new app_1.BasicCalculator();
    test("show tong quat cac phuong thuc trong ham", function () {
        expect(calt).toEqual({});
    });
    test("addition ", function () {
        expect(calt.add(1, 2)).toEqual(3);
    });
    test("subtraction ", function () {
        expect(calt.subtract(1, 2)).toEqual(-1);
    });
    test("multiple ", function () {
        expect(calt.multiple(1, 2)).toEqual(2);
    });
    test("devide ", function () {
        expect(calt.divide(1, 2)).toEqual(1 / 2);
    });
});
