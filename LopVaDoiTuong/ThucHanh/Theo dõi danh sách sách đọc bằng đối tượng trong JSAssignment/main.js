"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var Book1 = new book_1.Book("LaoHac", "NamCao", false);
var Book2 = new book_1.Book("HacQue", "CaoCao", true);
var books = [];
books.push(Book1, Book2);
books.map((function (value) {
    var bookInfo = value.title + " by " + value.author;
    if (value.alreadyRead) {
        console.log("book ready " + bookInfo);
    }
    else {
        console.log("book not ready " + bookInfo);
    }
}));
//# sourceMappingURL=main.js.map