var arr = [1, 2, 5, 6, 7, 10];
function findItemMiss(arr) {
    var i = 1;
    var newArr = [];
    while (i < 11) {
        if (arr.indexOf(i) == -1) {
            newArr.push(i);
        }
        i++;
    }
    return newArr;
}
var result = findItemMiss(arr);
console.log(result);
