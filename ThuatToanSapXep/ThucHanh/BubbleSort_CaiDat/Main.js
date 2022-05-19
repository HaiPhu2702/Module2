//BubbleSort_CaiDat
/*
* i=0
* j=arr.length-1 j>i  j--
* so sanh j vs j-1 doi chỗ đến về i...rồi tăng i lên 1...tiếp tuc lại
* */
var arr = [4, 3, 7, 9, 2, 3, 7, 67, 4, 75637, 57, 7523, 545, 435];
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = arr.length - 1; j > i; j--) {
        if (arr[j] < arr[j - 1]) {
            var temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);
