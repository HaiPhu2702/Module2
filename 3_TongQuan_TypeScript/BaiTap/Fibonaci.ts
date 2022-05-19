let n1 = 0;
let n2 = 1;
let sum = 1;
let count = 0;
while (count <= 5) {
    let next = n1 + n2;
    sum += next
    n1 = n2;
    n2 = next;
    count++;
}
console.log(sum)

