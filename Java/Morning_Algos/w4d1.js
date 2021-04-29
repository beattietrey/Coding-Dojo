// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };

    // recursive
    insert(node, current = this.root) {
        if(this.isEmpty()) {
            this.root = node;
            return;
        } else if(current.val > node.val) {
            if (current.left == null) {
                current.left = node;
                return;
            } else {
                return this.insert(node, current.left); 
            }
        } else {
            if(current.right == null) {
                current.right = node;
                return;
            } else {
                return this.insert(node, current.right);
            }
        }
    }
    // recursive
    getLargestFromSubtree(current = this.root) {
        if(current.right != null) {
            return this.getLargestFromSubtree(current.right);
        } else {
            return current.val;
        }
    }

    // iterative
    getSmallestFromSubtree() {
        var current = this.root;
        while(current.left != null) {
            current = current.left;
        }
        return current.val;
    }
};

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call

var myBST = new BST();
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(5));
myBST.insert(new BSTNode(20));
myBST.insert(new BSTNode(3));
myBST.insert(new BSTNode(25));
myBST.insert(new BSTNode(19));
myBST.insert(new BSTNode(4));
console.log(myBST.getSmallestFromSubtree()); // 5
console.log(myBST.getLargestFromSubtree()); // 20
console.log(myBST.root)
