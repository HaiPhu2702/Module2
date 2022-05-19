"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
describe("test NextDayCalculator", function () {
    var calt = new app_1.NextDayCalculator();
    test("test NextDay Method", function () {
        expect(calt).toEqual({});
    });
    test("chitiet", function () {
        expect(calt.getNextDay(1, 1, 2018)).toEqual("2/1/2018");
    });
});
