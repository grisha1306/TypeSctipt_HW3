import { BinaryTree } from "./binary-tree.js";
import * as readlineSync from "readline-sync"

const binaryTree: BinaryTree<number,number> = new BinaryTree();
binaryTree.insert(10, 50);
binaryTree.insert(1, 30);
binaryTree.insert(2, 20);
binaryTree.insert(3, 15);
binaryTree.insert(4, 35);
binaryTree.insert(5, 60);
binaryTree.insert(6, 90);

while(true) {
    let menu = ['Add', 'Search by key', 'Delete by Key', 'Print Tree', 'Exit']
    let index = readlineSync.keyInSelect(menu, 'Select Option');
    console.log(" ");

    if (index === 0) {
        const enterValue: String = readlineSync.question('Input value:');
        const enterKey: String = readlineSync.question('Input key:');
        console.log('Key for insert = ' + enterKey + ' Value for insert = ' + enterValue);
        binaryTree.insert(Number(enterValue), Number(enterKey));
    }

    if ( index === 1 ) {
        const enterKey: String = readlineSync.question('Input key:');
        console.log('Key for Search = ' + enterKey);
        console.log(binaryTree.search(binaryTree.root, Number(enterKey)));
    }

    if ( index === 2 ) {
        const enterKey: String = readlineSync.question('Input key:');
        console.log('Key for remove = ' + enterKey);
        binaryTree.remove(Number(enterKey));
    }

    if ( index === 3) {
        console.log('Print Tree: ')
        binaryTree.inorder();
    }

    if ( index === 4 )
        break;

}