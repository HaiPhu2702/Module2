import {Stack} from "./Stack";
import {Queue} from "./queue";

let stack = new Stack();
let queue = new Queue();

let str = "radartgd"


function checkDoiXung(str){
    for (let i = 0; i < str.length; i++) {
        stack.push(str.charAt(i));
        queue.add(str.charAt(i));

    }
    let count=0;
    for (let i = 0; i <stack.size() ; i++) {
        if(stack.pop()!==queue.deQueue()){
         return false;
        }
    }
    return  true;
}
let result=checkDoiXung(str);
if(result==true){
    console.log("doi xứng")
}else {
    console.log("ko doi xúng")
}


