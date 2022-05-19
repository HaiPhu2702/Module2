import {Node} from "./Node";

export class LinkedListSinhVien<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    show() {
        let curr = this.head;
        while (curr != null) {
            console.log(curr)
            curr = curr.next;
        }
    }

    totalStudentsFail() {
        let count = 0;
        let curr = this.head;
        while (curr != null) {
            if (curr.score <= 5) {
                count++
            }
            curr = curr.next;
        }
        return count + " nguoi";
    }

    listStudentMaxScore() {
        let count = 0;

        let curr = this.head;
        while (curr != null) {
            if (curr.score >= 8) {
                console.log(curr)
                count++
            }
            curr = curr.next;
        }
        console.log("Tong " + count + " nguoi")
    }

    findByName(name: T) {
        let curr = this.head;
        while (curr != null) {
            if (curr.name === name) {
                return curr
            }
            curr = curr.next;
        }
        return -1;

    }

    insertFirst(name: T, score: number) {
        let new_Node = new Node(name, score);
        new_Node.next = this.head;
        this.head = new_Node;
        if (!this.tail) {
            this.tail = new_Node;
        }
        this.size++;
    }

    lastInsertNode(name: T, score: number) {
        if (!this.head) {
            this.insertFirst(name, score)
        } else {
            let node = new Node(name, score);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }


}