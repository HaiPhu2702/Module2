import {Node} from "./Node";

export class LinkedList<T> {

    head: Node<T> | null
    tail: Node<T> | null
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    show() {
        let listData = [];
        let temp = this.head;
        while (temp != null) {
            listData.push(temp.data)
            temp = temp.next;
        }
        return listData;
    }

    insertFirstNode(data: T): void {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }

    insertLastNode(data: T): void {
        if (!this.head){
            this.insertFirstNode(data);
        }else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    getSize() : number{
        return this.size;
    }




}