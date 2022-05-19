let arrNumber: number[] = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let target: number = 5;

function theNumberOfOccurrences(arr: number[], valueFind: number) {
    let count = 0;
    arr.forEach((value) => {
        if (value == valueFind) {
            count++
        }
    })
    return count;
}

let result=theNumberOfOccurrences(arrNumber,target)
if(result!=0){
    console.log(`tim thấy ${target} xuất hiện ${result} lần`)
}else {
    console.log("ko có ")
}