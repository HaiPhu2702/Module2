import {Node} from "./Node";

export class LinkedList<T> {

    head:Node<T>|null;
    tail: Node<T>|null;
    size:number;
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    show(){
        let curr=this.head;
        while(curr!=null){
            console.log(curr.data)
            curr=curr.next;
        }
    }

    firstInsertNode(data:T){
        let new_Node=new Node(data);
        new_Node.next=this.head;
        this.head=new_Node;
        if(!this.tail){
            this.tail=new_Node;
        }
        this.size++;
    }

    lastInsertNode(data:T){
        if(!this.head){
            this.firstInsertNode(data);
        }else{
            let node=new Node(data);
            this.tail.next=node;
            this.tail=node;
            this.size++;
        }
    }

    firstDeleteNode(){
        if(this.head==null){
            console.log("LL is Empty")
        }else {
            if(this.head.next==null &&this.tail.next==null){
                this.head=null;
            } else{
                this.head=this.head.next;
            }
            this.size--;
        }
    }

    lastDeleteNode(){
        if(this.head==null){
            console.log("LL is Empty")
        }else {
            if(this.head.next==null &&this.tail.next==null){
                this.head=null;
            } else{
                let prev=null;
                let curr=this.head;
                while (curr!=null){
                    prev=curr;
                    curr=curr.next;
                }
                prev.next=null;
                this.tail=prev;
                this.size--;
            }
        }

    }




}