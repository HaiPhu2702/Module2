let data: number[] = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let target: number = 5;

function findFirstIndex(arr: number[], valueFind: number):number {

    let low: number = 0;
    let height: number = arr.length - 1;
    let index = -1;

    while (low <= height) {
        let mid = Math.floor((low + height) / 2);
        if (arr[mid] === valueFind) {
            index = mid;
            height = mid - 1;
        } else if (arr[mid] > valueFind) {
            height = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return index;
}
let index=findFirstIndex(data,target);
if(index!==-1){
    console.log(`tim thay ${target} o vi tri ${index}`)
}else {
    console.log("ko co dau")
}
