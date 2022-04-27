"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var BookMannager_1 = require("./BookMannager");
var book1 = new Book_1.Book('B001', 'Lập trình Java');
var book2 = new Book_1.Book('B002', 'Lập trình PHP');
var book3 = new Book_1.Book('B003', 'Lập trình TypeScript');
var bookManager = new BookMannager_1.BookMannager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
var show = bookManager.getList();
console.log(show);
bookManager.updateB("B001", "ruby");
console.log(bookManager.getList());
//# sourceMappingURL=main.js.map