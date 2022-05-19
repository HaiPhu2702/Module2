export class Node<T>{
    data:T;
    next=null;
    prev=null;
    constructor(data:T) {
        this.data=data;
    }
}