"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
var TreeNode_1 = require("./TreeNode");
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.size = 0;
        this.root = null;
    }
    //thêm node
    BinarySearchTree.prototype.insertTreeNode = function (rootTree, data) {
        if (rootTree === void 0) { rootTree = null; }
        var treeNode = new TreeNode_1.TreeNode(data);
        if (rootTree == null) {
            rootTree = treeNode;
            return rootTree;
        }
        else {
            if (data < rootTree.data) {
                if (rootTree.left == null) {
                    rootTree.left = treeNode;
                }
                else {
                    this.insertTreeNode(rootTree.left, data);
                }
            }
            else {
                if (rootTree.right == null) {
                    rootTree.right = treeNode;
                }
                else {
                    this.insertTreeNode(rootTree.right, data);
                }
            }
        }
    };
    //Tìm kiếm BST
    BinarySearchTree.prototype.searchNode = function (root, data) {
        if (root == null)
            return null;
        if (data < root.data) {
            root.left = this.deleteNode(root.left, data);
        }
        else if (data > root.data) {
            root.right = this.deleteNode(root.right, data);
        }
        else { //root=data//đã tìm ra
            return root;
        }
    };
    //xóa node
    BinarySearchTree.prototype.deleteNode = function (root, data) {
        //B1:đi tìm node cần xóa
        if (root == null)
            return null;
        if (data < root.data) {
            root.left = this.deleteNode(root.left, data);
        }
        else if (data > root.data) {
            root.right = this.deleteNode(root.right, data);
        }
        else { //root=data//đã tìm ra
        }
    };
    //duyệt cây BST:3 cách
    //preoder  Root->L->R
    BinarySearchTree.prototype.preOder = function (root) {
        if (root == null)
            return;
        //duyet Root
        console.log(root.data + " ");
        //duyet left
        this.preOder(root.left);
        //duyet right
        this.preOder(root.right);
        return root;
    };
    //inoder  L->Root->R
    BinarySearchTree.prototype.inOder = function (root) {
        if (root == null)
            return;
        //duyet left
        this.inOder(root.left);
        //duyet Root
        console.log(root.data + "  ");
        //duyet right
        this.inOder(root.right);
        return root;
    };
    //postoder L->R->Root
    BinarySearchTree.prototype.postOder = function (root) {
        if (root == null)
            return;
        //duyet left
        this.postOder(root.left);
        //duyet right
        this.postOder(root.right);
        //duyet Root
        console.log(root.data + "  ");
        return root;
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
