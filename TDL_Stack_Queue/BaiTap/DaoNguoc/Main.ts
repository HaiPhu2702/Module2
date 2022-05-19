import {Stack} from "./Stack";

let stack = new Stack();


let arr = [1, 2, 3, 4, 5, 6];

function DaoNguoc(arr) {

    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    for (let j = 0; j < arr.length; j++) {
        let a= stack.pop();
        arr[j]=a;
   }
    return arr;

}

let result=DaoNguoc(arr);

console.log(result)