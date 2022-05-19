import {FizzBuzz} from "./app";

describe("Test class FIzzBuzz", () => {
    let calt: FizzBuzz = new FizzBuzz();
    test("add a number", () => {
        expect(calt).toEqual({})
    });

    test("add num1",()=>{
        expect(calt.fizzBuzz(6)).toEqual("Fizz")
    });
    test("add num2",()=>{
        expect(calt.fizzBuzz(10)).toEqual("Buzz")
    });
    test("add num3", () => {
        expect(calt.fizzBuzz(1)).toEqual("1")
    });
    test("add num4",()=>{
        expect(calt.fizzBuzz(30)).toEqual("FizzBuzz")
    });

})