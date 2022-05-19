import {DoublyLinkedList} from "./DoublyLinkedList";


let DLL=new DoublyLinkedList();
DLL.lastInsertNode(1);
DLL.lastInsertNode(2);
DLL.lastInsertNode(3);
DLL.lastInsertNode(4);
DLL.lastInsertNode(5);
DLL.lastInsertNode(6);
DLL.lastInsertNode(7);
console.log("-----show--------" )
DLL.show()

console.log("----themdau---------" )
DLL.firstInsertNode(0);
DLL.show();


console.log("-----themcuoi--------" )
DLL.lastInsertNode(8);
DLL.show();

console.log("----xoadau---------" )
DLL.deleteFirstNode()
DLL.show();


console.log("----xoacuoi---------" )
DLL.deleteLastNode()
DLL.show();


