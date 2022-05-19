export class Node<T> {
    name:T
    score:number
    next=null;
    constructor(name:T,score:number) {
        this.name=name;
        this.score=score;

    }


}