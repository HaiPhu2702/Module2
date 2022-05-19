import {I_Stack_Queue} from "./I_Stack_Queue";


export class Stack<T> implements I_Stack_Queue<T> {

    private container: T[] = [];
    private capacity: number = Infinity

    constructor() {
    }

    size(): number {
        return this.container.length;
    }

    push(data: T): void {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.container.push(data);
    }

    peek(): T | undefined {
        return this.container[this.size() - 1];
    }

    pop(): T | undefined {
        return this.container.pop();
    }

}

const stack = new Stack<string>();
stack.push("A");
stack.push("B");

console.log(stack.size());; // Output: 2
console.log(stack.peek());; // Output: "B"
console.log(stack.size());; // Output: 2
console.log(stack.pop());;  // Output: "B"
console.log(stack.size());; // Output: 1