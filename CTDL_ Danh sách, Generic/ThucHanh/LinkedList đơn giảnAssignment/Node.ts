export class Node<T> {

    data: T;
    next = null;
    constructor(data:T) {
        this.data=data;
    }

}