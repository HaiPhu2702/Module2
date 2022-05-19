export class TriangleClassifier {

    triangleEdge(edge1: number, edge2: number, edge3: number) {
        if (this.isoscelesTriangle(edge1, edge2, edge3) && this.triangleCorner(edge1, edge2, edge3))
            return `equilateralTriangle`
        else if (this.isoscelesTriangle(edge1, edge2, edge3))
            return `isoscelesTriangle`
        else
            return `regularTriangle`
    }

    isoscelesTriangle(edge1: number, edge2: number, edge3: number) {
        return edge1 == edge2 || edge2 == edge3 || edge3 == edge1
    }

    triangleCorner(edge1: number, edge2: number, edge3: number) {
        return ((Math.pow(edge1, 2) + Math.pow(edge2, 2) - Math.pow(edge3, 2)) / (2 * edge1 * edge2)) == 1 / 2

    }

}