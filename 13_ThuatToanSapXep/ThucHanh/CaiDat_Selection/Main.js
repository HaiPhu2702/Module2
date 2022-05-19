/*
  SX selection
let i=0 ;;; min=i
let j=i+1  ->  arr[j] <arr[min]
đưa min   qua
hêt for j  tim dc min...doi cho cho arr[i]

 let temp=arr[i];
arr[i]=arr[min];
arr[min]=temp;

 */
var arr = [4, 3, 3, 7, 57];
for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}
console.log(arr);
