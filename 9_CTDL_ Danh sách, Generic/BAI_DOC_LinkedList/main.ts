import {LinkedList} from "./LinkedList";

let LL=new LinkedList();

LL.firstInsertNode(4)
LL.firstInsertNode(3)
LL.firstInsertNode(2)
LL.firstInsertNode(1)
LL.show();
console.log("------------------")

LL.lastInsertNode(5);
LL.show()
console.log("------------------")

LL.firstDeleteNode();
LL.show();
console.log("------------------")

LL.lastDeleteNode();
LL.show();