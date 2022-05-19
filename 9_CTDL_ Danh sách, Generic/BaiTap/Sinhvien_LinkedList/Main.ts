import {LinkedListSinhVien} from "./LinkedList";

let sv=new LinkedListSinhVien()

sv.insertFirst("phu",9)
sv.insertFirst("hu",8)
sv.insertFirst("u",4)
sv.show();
console.log("-------------------"  )

sv.lastInsertNode("kakaka",2)
sv.show()

console.log("---------")

console.log(sv.totalStudentsFail());;

console.log("---------")
sv.listStudentMaxScore();

console.log("--------")
let a=sv.findByName("husddsf");
if(a==-1){
    console.log("ko thay")
}else{
    console.log(a)
}
