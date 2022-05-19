export class Queue<T> {
    listQueue: string[] = [];

    constructor() {
    }

    add(data:string):void{
        this.listQueue.push(data);
    }

    deQueue(){
        return this.listQueue.shift();
    }

    size(){
        return this.listQueue.length;
    }

}