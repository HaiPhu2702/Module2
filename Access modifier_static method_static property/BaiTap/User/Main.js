"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var user1 = new User_1.User("phu", "hdg@gamil", User_1.Role.Admin);
var user2 = new User_1.User("hoa", "g@gamil", User_1.Role.User);
console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user1.isAdmin());
//# sourceMappingURL=Main.js.map