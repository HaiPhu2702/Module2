export class Stack<T> {
    list: number[] = [];

    constructor() {
    }

    show(){
        return this.list;
    }

    push(data:number):void{
        this.list.push(data);
    }

    pop(){
        return this.list.pop();
    }

    size(){
        return this.list.length;
    }

}