import {TriangleClassifier} from "./app";

describe("test class trigleType", () => {
    let calt: TriangleClassifier = new TriangleClassifier()
    test("truyen cac canh", () => {
        expect(calt).toEqual({})
    });

    test("truyen canh lan 1",()=>{
        expect(calt.triangleEdge(10,6,10)).toEqual("isoscelesTriangle")
    });
    test("truyen canh lan 2",()=>{
        expect(calt.triangleEdge(6,6,6)).toEqual("equilateralTriangle")
    });
     test("truyen canh lan 3",()=>{
        expect(calt.triangleEdge(6,9,5)).toEqual("regularTriangle")
    });


})