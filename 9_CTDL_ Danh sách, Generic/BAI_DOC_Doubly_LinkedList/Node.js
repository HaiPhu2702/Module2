"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
    return Node;
}());
exports.Node = Node;
