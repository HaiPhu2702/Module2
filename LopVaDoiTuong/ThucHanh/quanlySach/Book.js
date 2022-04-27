"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(ID, name) {
        this._ID = ID;
        this.name = name;
    }
    Book.prototype.getNameB = function () {
        return this.name;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    Book.prototype.getID = function () {
        return this._ID;
    };
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=Book.js.map