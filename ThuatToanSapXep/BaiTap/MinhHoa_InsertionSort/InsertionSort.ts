export class InsertionSort {
    static list: number[] = [4, 5, 6, 57, 676, 8, 78, 79, 79, 5, 6, 7, 67, 68]

    public static Sort(list: number[]) {
        let needNextPass: boolean = true;


        for (let i = 1; i < list.length; i++) {

            let temp = list[i];
            let j = i - 1;

            needNextPass = false;
            while (j >= 0 && temp < list[j]) {

                console.log("Swap " + list[j + 1] + " with " + list[j]);
                list[j + 1] = temp

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
            for (let j = 0; j < list.length; j++) {
                console.log(list[j] + "\t");
            }
            console.log();
        }


    }

}