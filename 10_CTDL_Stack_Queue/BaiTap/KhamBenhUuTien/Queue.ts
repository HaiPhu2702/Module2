import {I_Queue_PriorityUuTien} from "./I_Queue_Priority(UuTien)";

export class Queue<T> implements I_Queue_PriorityUuTien<T> {
    listQueue: [priority: number, name: T][] = [];


    constructor() {

    }

    add(priority: number, name: T): void {
        this.listQueue.push([priority, name])
    }

    delete(): T {
        // min lúc này là mảng gồm số +tên có index 0:số và  1: tên  =>
        let min = this.listQueue[0];
        let indexMin = -1;

        this.listQueue.forEach((value, index) => {
            //chính là so sánh số
            if (value[0] < min[0]) {
                min = value;
                indexMin = index;
            }

        })
        this.listQueue.splice(indexMin, 1)
        //xóa xong trả về tên của bệnh nhân đã xóa
        return min[1]
    }

    isEmpty(): boolean {
        return this.listQueue.length == 0;
    }

    size(): number {
        return this.listQueue.length;
    }


}