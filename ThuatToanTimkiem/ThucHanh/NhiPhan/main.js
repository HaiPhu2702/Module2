var data = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
var target = 5;
function findFirstIndex(arr, valueFind) {
    var low = 0;
    var height = arr.length - 1;
    var index = -1;
    while (low <= height) {
        var mid = Math.floor((low + height) / 2);
        if (arr[mid] === valueFind) {
            index = mid;
            height = mid - 1;
        }
        else if (arr[mid] > valueFind) {
            height = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return index;
}
var index = findFirstIndex(data, target);
if (index !== -1) {
    console.log("tim thay ".concat(target, " o vi tri ").concat(index));
}
else {
    console.log("ko co dau");
}
