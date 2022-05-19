import {Instructor} from "./Instructor";


let a=new Instructor({name:"phu",role:"satthu"})
let b=new Instructor({name:"ung",role:"hanhdong"})

a.renderDetails();
b.renderDetails();

Instructor.helloword();
console.log(Instructor.canTeach(a));