import {I_Stack_Queue} from "./I_Stack_Queue";

export class Queue<T> implements I_Stack_Queue<T> {
    listQueue: T[] = [];
    capacity:number=Infinity

    constructor() {
    }

    size(): number {
        return this.listQueue.length;
    }

    push(data: T): void {
        if(this.size()===this.capacity){
            throw Error("het ram tran data")
        }
        this.listQueue.push(data)
    }

    pop(): T | undefined {
        return this.listQueue.shift();
    }

    peek(): T | undefined {
        return this.listQueue[this.size()-1];
    }


}

let queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.pop()) // 1