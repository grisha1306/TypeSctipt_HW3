class TreeNode {
    constructor(value, key) {
        this._left = null;
        this._right = null;
        this._value = value;
        this._key = key;
    }
    get left() {
        return this._left;
    }
    set left(value) {
        this._left = value;
    }
    get right() {
        return this._right;
    }
    set right(value) {
        this._right = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    get key() {
        return this._key;
    }
    set key(value) {
        this._key = value;
    }
}
export class BinaryTree {
    constructor() {
        this._root = null;
    }
    get root() {
        return this._root;
    }
    set root(value) {
        this._root = value;
    }
    insert(value, key) {
        let currentNode = new TreeNode(value, key);
        if (this._root === null) {
            // console.log("Insert Root")
            this._root = currentNode;
        }
        else {
            this.insertIntoCurrentNode(this._root, currentNode);
        }
    }
    insertIntoCurrentNode(node, currentNode) {
        let key = currentNode.key;
        if (key > node.key) {
            if (node.right === null) {
                node.right = currentNode;
                // console.log("Insert right")
            }
            else if (node.right != null) {
                this.insertIntoCurrentNode(node.right, currentNode);
                // console.log("Insert right")
            }
        }
        else if (key < node.key) {
            if (!node.left) {
                node.left = currentNode;
                // console.log("Insert left")
            }
            else if (node.left != null) {
                this.insertIntoCurrentNode(node.left, currentNode);
            }
        }
    }
    search(node, key) {
        if (node === null)
            return null;
        if (key === node.key)
            return node;
        if (key > node.key) {
            return this.search(node.right, key);
        }
        else
            return this.search(node.left, key);
    }
    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    remove(key) {
        this.root = this.removeNode(this.root, key); // helper method below
    }
    removeNode(node, key) {
        if (node === null) {
            return null;
        }
        else if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            // без потомков
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // один потомок
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            // два потомка
            let newNode = this.findMinNode(node.right);
            node.key = newNode.key;
            node.value = newNode.value;
            node.right = this.removeNode(node.right, newNode.key);
            return node;
        }
    }
    inorder() {
        this.inorderRec(this.root);
    }
    inorderRec(node) {
        if (node === null) {
            return;
        }
        this.inorderRec(node.left);
        console.log("Key = " + node.key + " Value = " + node.value);
        this.inorderRec(node.right);
    }
}