class TreeNode<V, K> {
    private _left: TreeNode<V, K> | null;
    private _right: TreeNode<V, K> | null;
    private _value: V;
    private _key : K;

    constructor(value: V, key : K) {
        this._left = null;
        this._right = null;
        this._value = value;
        this._key = key;
    }


    get left(): TreeNode<V, K> | null {
        return this._left;
    }

    set left(value: TreeNode<V, K> | null) {
        this._left = value;
    }

    get right(): TreeNode<V, K> | null {
        return this._right;
    }

    set right(value: TreeNode<V, K> | null) {
        this._right = value;
    }

    get value(): V {
        return this._value;
    }

    set value(value: V) {
        this._value = value;
    }

    get key(): K {
        return this._key;
    }

    set key(value: K) {
        this._key = value;
    }
}

type compare<K> = ( a: K, b : K) => number;

export class BinaryTree<V,K> {

    private _root: TreeNode<V,K> | null;
    private readonly _comparator : compare<K>;

    constructor(comparator? : compare<K>) {
        this._root = null;
        if ( comparator )
            this._comparator = comparator;
        else {
            this._comparator = (a : K , b: K ) => {
                if ( a > b) {
                    return 1;
                }
                else if ( a < b ) {
                    return -1;
                }
                else
                    return 0;
            }
        }
    }

    get root(): TreeNode<V, K> | null {
        return this._root;
    }

    set root(value: TreeNode<V, K> | null) {
        this._root = value;
    }

    insert (value: V, key : K) : void {
        let currentNode = new TreeNode(value,key);
        if ( this._root === null ) {
            // console.log("Insert Root")
            this._root = currentNode;
        }
        else {
            this.insertIntoCurrentNode(this._root, currentNode);
        }
    }

    private insertIntoCurrentNode (node: TreeNode<V,K> , currentNode : TreeNode<V,K>) : void {
        if (this._comparator(currentNode.key, node.key) > 0) {
            if (node.right === null) {
                node.right = currentNode;
                // console.log("Insert right")
            } else
                if (node.right != null) {
                    this.insertIntoCurrentNode(node.right, currentNode)
                    // console.log("Insert right")
                }

        } else if (this._comparator(currentNode.key, node.key) < 0) {
            if (!node.left) {
                node.left = currentNode
                // console.log("Insert left")
            } else
                if (node.left != null) {
                    this.insertIntoCurrentNode(node.left, currentNode);
                }
        }
    }

    search  (node : TreeNode<V, K> | null , key: K) : TreeNode<V, K> | null {
        if (node === null) return null;

        // if ( key === node.key)
        if ( this._comparator(key, node.key) === 0)
            return node;

        if (this._comparator(key, node.key) > 0 ) {
            return this.search(node.right, key);
        } else
            return this.search(node.left, key);

    }

    private findMinNode(node : TreeNode<V, K>) : TreeNode<V, K> {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    remove(key : K) : void {
        this.root = this.removeNode(this.root, key); // helper method below
    }

    private removeNode (node : TreeNode<V, K> | null, key : K) : TreeNode<V, K> | null {
        if (node === null) {
            return null;
        } else if (this._comparator(key, node.key) < 0) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this._comparator(key, node.key) > 0) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // без потомков
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // один потомок
            if (node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
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

    inorder() : void {
        this.inorderRec(this.root);
    }

    private inorderRec(node : TreeNode<V, K> | null) : void {
    if (node === null) {
        return;
    }
        this.inorderRec(node.left);
        console.log("Key = " + node.key + " Value = " + node.value);
        this.inorderRec(node.right);
}

}