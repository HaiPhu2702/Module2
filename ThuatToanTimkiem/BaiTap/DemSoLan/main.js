var arrNumber = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
var target = 5;
function theNumberOfOccurrences(arr, valueFind) {
    var count = 0;
    arr.forEach(function (value) {
        if (value == valueFind) {
            count++;
        }
    });
    return count;
}
var result = theNumberOfOccurrences(arrNumber, target);
if (result != 0) {
    console.log("tim th\u1EA5y ".concat(target, " xu\u1EA5t hi\u1EC7n ").concat(result, " l\u1EA7n"));
}
else {
    console.log("ko có ");
}
