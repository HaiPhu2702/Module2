
let  arr = [1, 2, 5, 6, 7, 10]

function  findItemMiss(arr:number[]){
    let i=1;
    let newArr:number[]=[];

    while (i<11){
        if(arr.indexOf(i)==-1){
            newArr.push(i);
        }
        i++;
    }
    return newArr;
}

let result=findItemMiss(arr);
console.log(result);