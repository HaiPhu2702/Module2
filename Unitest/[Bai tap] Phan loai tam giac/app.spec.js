"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
describe("test class trigleType", function () {
    var calt = new app_1.TriangleClassifier();
    test("truyen cac canh", function () {
        expect(calt).toEqual({});
    });
    test("truyen canh lan 1", function () {
        expect(calt.triangleEdge(10, 6, 10)).toEqual("isoscelesTriangle");
    });
    test("truyen canh lan 2", function () {
        expect(calt.triangleEdge(6, 6, 6)).toEqual("equilateralTriangle");
    });
    test("truyen canh lan 3", function () {
        expect(calt.triangleEdge(6, 9, 5)).toEqual("regularTriangle");
    });
});
