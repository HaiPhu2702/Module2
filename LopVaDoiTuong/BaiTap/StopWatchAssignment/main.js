"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StopWatch_1 = require("./StopWatch");
var a = new StopWatch_1.StopWatch();
var arr = new Array(6000);
function sort() {
    for (var i_1 = 0; i_1 < arr.length - 1; i_1++) {
        var min = i_1;
        for (var j = i_1 + 1; j < arr.length; j++) {
            if (arr[j] > arr[min]) {
                min = j;
            }
        }
        var temp = arr[min];
        arr[min] = arr[i_1];
        arr[i_1] = temp;
    }
}
a.start();
sort();
a.stop();
console.log(a.getElapsedTime());
//# sourceMappingURL=Main.js.map