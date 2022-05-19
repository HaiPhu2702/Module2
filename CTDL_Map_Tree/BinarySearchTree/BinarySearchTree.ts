import {TreeNode} from "./TreeNode";

export class BinarySearchTree<T> {
    protected root: TreeNode<T>;
    protected size: number = 0;

    constructor() {
        this.root = null;
    }

    //thêm node
    insertTreeNode(rootTree = null, data: T) {
        let treeNode = new TreeNode(data);
        if (rootTree == null) {
            rootTree = treeNode;
            return rootTree
        } else {
            if (data < rootTree.data) {
                if (rootTree.left == null) {
                    rootTree.left = treeNode;
                } else {
                    this.insertTreeNode(rootTree.left, data)
                }
            } else {
                if (rootTree.right == null) {
                    rootTree.right = treeNode;
                } else {
                    this.insertTreeNode(rootTree.right, data)
                }
            }
        }

    }

    //Tìm kiếm BST
    searchNode(root: TreeNode<T>, data: T) {
        if (root == null)
            return null;
        if (data < root.data) {
            root.left = this.deleteNode(root.left, data);
        } else if (data > root.data) {
            root.right = this.deleteNode(root.right, data);
        } else {//root=data//đã tìm ra
            return root
        }

    }

    //xóa node
    findLeftNodeOfRightTree(root: TreeNode<T>) {
        let leftNode = root;
        while (leftNode != null) {
            leftNode = leftNode.left;
        }
        return leftNode;
    }

    deleteNode(root: TreeNode<T>, data: T) {
        //B1:đi tìm node cần xóa
        if (root == null)
            return null;
        if (data < root.data) {
            root.left = this.deleteNode(root.left, data);
        } else if (data > root.data) {
            root.right = this.deleteNode(root.right, data);
        } else {//root=data//đã tìm ra
            //B2:   xoa node
            //th1 node can xoa  ko co node la
            if (root.left == null && root.right == null) {
                return null;
            }

            //th2 node can xoa co node con ben trai || phai
            if (root.left != null && root.right == null) {
                return root.left;
            }
            if (root.left == null && root.right != null) {
                return root.right;
            }

            //th3 node can xoa co 2 con:
            //b1:tim node trai cung cay con ben phai || node phai cung cua cay con ben phai (tao ham )
            let leftNode = this.findLeftNodeOfRightTree(root.right);
            root.data = leftNode.data;
            root.right = this.deleteNode(root.right, leftNode.data);
        }
        return root;
    }


    //duyệt cây BST:3 cách

    //preoder  Root->L->R

    preOder(root: TreeNode<T>) {
        if (root == null) return;
        //duyet Root
        console.log(root.data + " ");
        //duyet left
        this.preOder(root.left);
        //duyet right
        this.preOder(root.right);
        return root;
    }


    //inoder  L->Root->R

    inOder(root: TreeNode<T>) {
        if (root == null) return;
        //duyet left
        this.inOder(root.left);
        //duyet Root
        console.log(root.data + "  ");
        //duyet right
        this.inOder(root.right);
        return root;
    }


    //postoder L->R->Root
    postOder(root: TreeNode<T>) {
        if (root == null) return;
        //duyet left
        this.postOder(root.left);
        //duyet right
        this.postOder(root.right);
        //duyet Root
        console.log(root.data + "  ");
        return root;

    }


}