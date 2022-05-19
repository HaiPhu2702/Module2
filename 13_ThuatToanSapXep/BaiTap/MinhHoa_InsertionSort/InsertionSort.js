"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertionSort = void 0;
var InsertionSort = /** @class */ (function () {
    function InsertionSort() {
    }
    InsertionSort.Sort = function (list) {
        var needNextPass = true;
        for (var i = 1; i < list.length; i++) {
            var temp = list[i];
            var j = i - 1;
            needNextPass = false;
            while (j >= 0 && temp < list[j]) {
                console.log("Swap " + list[j + 1] + " with " + list[j]);
                list[j + 1] = temp;
                needNextPass = true;
            }
            list[j + 1] = temp;
            /* Array may be sorted and next pass not needed */
            if (needNextPass == false) {
                console.log("Array may be sorted and next pass not needed");
                break;
            }
            /* Show the list after sort */
            console.log("List after the  " + i + "' sort: ");
            for (var j_1 = 0; j_1 < list.length; j_1++) {
                console.log(list[j_1] + "\t");
            }
            console.log();
        }
    };
    InsertionSort.list = [4, 5, 6, 57, 676, 8, 78, 79, 79, 5, 6, 7, 67, 68];
    return InsertionSort;
}());
exports.InsertionSort = InsertionSort;
