import {LinkedList} from "./LinkedList";


let linkedList = new LinkedList();
linkedList.insertFirstNode(4);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(1);
linkedList.insertLastNode(5);
console.log(linkedList.getSize());
console.log(linkedList.show());