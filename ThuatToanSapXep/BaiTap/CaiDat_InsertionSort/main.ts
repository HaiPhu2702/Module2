


let arr=[4,3,7,9,2,3,7,67,4,75637,57,7523,545,435]

for (let i = 1; i < arr.length; i++) {

    let j=i-1;
    let temp=arr[i];

    while (j>=0 && temp<arr[j]){
        arr[j+1]=arr[j];
        j--;
    }

    if(temp>=arr[j]){
        arr[j+1]=temp;
    }


}