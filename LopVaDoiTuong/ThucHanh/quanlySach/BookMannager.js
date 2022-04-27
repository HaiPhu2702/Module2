"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMannager = void 0;
var BookMannager = /** @class */ (function () {
    function BookMannager() {
        this.books = [];
    }
    BookMannager.prototype.add = function (book) {
        this.books.push(book);
    };
    BookMannager.prototype.getList = function () {
        return this.books;
    };
    BookMannager.prototype.findIndexFromID = function (ID) {
        var i = -1;
        this.books.forEach(function (value, index) {
            if (value._ID === ID) {
                i = index;
            }
        });
        return i;
    };
    BookMannager.prototype.delete = function (ID) {
        var index = this.findIndexFromID(ID);
        if (index != -1) {
            this.books.splice(index, 1);
        }
        else {
            console.log("ko ton tai index");
        }
    };
    BookMannager.prototype.updateB = function (ID, name) {
        var index = this.findIndexFromID(ID);
        if (index != -1) {
            this.books[index].setName(name);
        }
        else {
            console.log("ko ton tai");
        }
    };
    return BookMannager;
}());
exports.BookMannager = BookMannager;
//# sourceMappingURL=BookMannager.js.map