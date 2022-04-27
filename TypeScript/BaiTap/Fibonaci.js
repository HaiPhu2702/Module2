var n1 = 0;
var n2 = 1;
var sum = 1;
var count = 0;
while (count <= 5) {
    var next = n1 + n2;
    sum += next;
    n1 = n2;
    n2 = next;
    count++;
}
console.log(sum);
//# sourceMappingURL=Fibonaci.js.map