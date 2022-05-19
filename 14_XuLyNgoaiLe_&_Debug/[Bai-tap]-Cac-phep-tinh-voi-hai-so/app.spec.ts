import {BasicCalculator} from "./app";

describe("add a function basic calculator",()=>{
    let calt:BasicCalculator=new BasicCalculator();
    test("show tong quat cac phuong thuc trong ham",()=>{
        expect(calt).toEqual({});
    });



    test("addition ",()=>{
        expect(calt.add(1,2)).toEqual(3)
    });
     test("subtraction ",()=>{
        expect(calt.subtract(1,2)).toEqual(-1)
    });
     test("multiple ",()=>{
        expect(calt.multiple(1,2)).toEqual(2)
    });
     test("devide ",()=>{
        expect(calt.divide(1,2)).toEqual(1/2)
    });


})