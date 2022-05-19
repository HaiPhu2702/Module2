export class Stack<T> {
    list: string[] = [];

    constructor() {
    }

    show(){
        return this.list;
    }

    push(data:string):void{
        this.list.push(data);
    }

    pop(){
        return this.list.pop();
    }

    size(){
        return this.list.length;
    }

}