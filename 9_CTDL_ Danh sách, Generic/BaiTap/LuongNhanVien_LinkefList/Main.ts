import {LinkedListStaff} from "./LinkedListStaff";

let staffA=new LinkedListStaff();

staffA.lastInsert(1,100)
staffA.lastInsert(2,200)
staffA.lastInsert(3,300)
staffA.lastInsert(4,400)

staffA.show();
console.log("---------------")
console.log("tổng tiền lương các tháng =   "+staffA.totalMoney());

staffA.maxMoneyOfMonth()