"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleClassifier = void 0;
var TriangleClassifier = /** @class */ (function () {
    function TriangleClassifier() {
    }
    TriangleClassifier.prototype.triangleEdge = function (edge1, edge2, edge3) {
        if (this.isoscelesTriangle(edge1, edge2, edge3))
            return "isoscelesTriangle";
        else if (this.equilateralTriangle(edge1, edge2, edge3))
            return "equilateralTriangle";
        else
            return "regularTriangle";
    };
    TriangleClassifier.prototype.isoscelesTriangle = function (edge1, edge2, edge3) {
        return edge1 == edge2 || edge2 == edge3 || edge3 == edge1;
    };
    TriangleClassifier.prototype.equilateralTriangle = function (edge1, edge2, edge3) {
        return this.isoscelesTriangle(edge1, edge2, edge3) && this.triangleCorner(edge1, edge2, edge3);
    };
    TriangleClassifier.prototype.triangleCorner = function (edge1, edge2, edge3) {
        return ((Math.pow(edge1, 2) + Math.pow(edge2, 2) - Math.pow(edge3, 2)) / (2 * edge1 * edge2)) == 1 / 2;
    };
    return TriangleClassifier;
}());
exports.TriangleClassifier = TriangleClassifier;
