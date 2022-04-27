import {Role, User} from "./User";

let user1=new User("phu","hdg@gamil",Role.Admin);

let user2=new User("hoa","g@gamil",Role.User);

console.log(user1.getInfo());
console.log(user2.getInfo());

console.log(user1.isAdmin());

