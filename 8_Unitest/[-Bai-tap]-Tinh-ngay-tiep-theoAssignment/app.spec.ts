import {NextDayCalculator} from "./app";

describe("test NextDayCalculator",()=>{
    let calt:NextDayCalculator=new NextDayCalculator();
    test("test NextDay Method",()=>{
        expect(calt).toEqual({})
    });

    test("chitiet",()=>{
        expect(calt.getNextDay(1,1,2018)).toEqual("2/1/2018")
    })
})