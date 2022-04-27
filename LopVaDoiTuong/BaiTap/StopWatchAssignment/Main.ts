import {StopWatch} from "./StopWatch";

let a =new StopWatch();
let arr=new Array(6000);

function sort(){

    for (let i = 0; i <arr.length-1 ; i++) {
        let min=i;
        for (let j = i+1; j <arr.length ; j++) {
            if(arr[j]>arr[min]){
                min=j;
            }
        }
        let temp= arr[min];
        arr[min]=arr[i];
        arr[i]=temp;

    }

}

a.start();

sort();

a.stop();

console.log(a.getElapsedTime());