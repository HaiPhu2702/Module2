import {Node} from "./Node";

export class DoublyLinkedList<T> {
    head: Node<T>;
    tail: Node<T>;
    size: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    show() {
        if (this.head == null) {
            console.log("DLL is Empty")
        }
        let curr = this.head;
        while (curr != null) {
            console.log(curr.data)
            curr = curr.next;
        }
    }

    firstInsertNode(data: T) {
        let node = new Node(data);
        node.next = this.head;
        node.prev = null;
        if (this.head) {
            this.head.prev = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.head = node;
        this.size++;

    }

    lastInsertNode(data: T) {
        let node = new Node(data);
        node.next = null;
        if (this.tail) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            node.prev = null;
            this.head = node;
            this.tail = node;
        }
        this.size++;
    }

    insertAfterNode(node: Node<T>, data: T) {
        if (node == null) {
            console.log("node ko ton tai")
        }
        let newNode = new Node(data);
        newNode.next = node.next;
        node.next = newNode;
        newNode.prev = node;
    }

    deleteFirstNode() {
        if (this.head) {
            if (this.head.next) {
                let temp = this.head;
                this.head = this.head.next;
                this.head.prev = null;
                temp.next = null;
            } else {
                this.head = null;
            }
        } else {
            console.log("DLL is empty")
        }
        this.size--;
    }

    deleteLastNode() {
        if (this.head) {
            if (this.head.next) {
                let prev =this.tail.prev;
                prev.next = null;
                this.tail.prev=null;
                this.tail = prev;
            } else {
                this.head = null;
            }
        } else {
            console.log("DLL is Empty")
        }
        this.size--;

    }


}