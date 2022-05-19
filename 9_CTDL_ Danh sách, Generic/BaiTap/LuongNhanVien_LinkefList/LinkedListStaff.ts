import {Node_Staff_A} from "./Node";

export class LinkedListStaff<T> {

    head: Node_Staff_A
    tail: Node_Staff_A
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

    //Tính tổng lương của nhân viên đó
    // Tìm tháng có lương cao nhất
    totalMoney() {
        let total: number = 0;
        if(!this.head){
            return 0;
        }
        let curr = this.head;
        while (curr != null) {
            total += curr.money;
            curr = curr.next;
        }
        return total;
    }

    maxMoneyOfMonth() {
        if (!this.head) {
            console.log(" đag trống chưa làm tháng nào")
        } else {

            let maxMoney = this.head;
            if (!this.head.next) {
                console.log("mới làm dc có tháng à !!tiền =  "+maxMoney.money ) ;
            }

            else {
                let curr = this.head.next;
                while (curr != null) {
                    if(curr.money>maxMoney.money){
                        maxMoney=curr;
                    }
                    curr=curr.next;
                }
                console.log("thang cao nhat = "+maxMoney.money);;
            }

        }
    }


    insertFirst(month: number, money: number) {
        let new_Node = new Node_Staff_A(month, money)
        new_Node.next = this.head;
        this.head = new_Node;
        if (!this.tail) {
            this.tail = new_Node;
        }
        this.size++;
    }


    lastInsert(month: number, money: number) {
        if (!this.head) {
            this.insertFirst(month, money)
        } else {
            let node = new Node_Staff_A(month, money);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }


}