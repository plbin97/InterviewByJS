import TreeNode from "../lib/TreeNode.mjs";
/**
 * 1.1 Recursive Method by String
 * @param root{TreeNode}
 * @returns {Array}
 */
export let recursivelyPrintToStringAndSplit = (root) => {
    return root === null ? [] : printInorderedTree(root).split(",").map(x => +x);
}
let printInorderedTree = (root) => {
    return (root.left === null ? "" : printInorderedTree(root.left) + ",") +
        root.val +
        (root.right === null ? "" : "," + printInorderedTree(root.right));
}


/**
 * 1.2 Recursive Method by Array
 * @param root{TreeNode}
 * @returns {Array}
 */
export let recursivelyIntoArray = (root) => {
    if (root === null) {
        return []
    }
    let arr = [];
    useArr(root, arr);
    return arr;
}

let useArr = (root, arr) => {
    if (root.left !== null) {
        useArr(root.left, arr);
    }
    arr.push(root.val);
    if (root.right !== null) {
        useArr(root.right, arr);
    }
}

/**
 * 2, Stack Method
 * @param root{TreeNode}
 * @returns {Array}
 */
export let usingStack = (root) => {
    let stack = [];
    let result = [];
    let current = root;
    while (stack.length > 0 || current !== null) {
        while (current !== null) { // Find the left most
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}

/**
 * 3, Morris Method
 * @param root{TreeNode}
 * @returns {Array}
 */
export let morrisApproach = (root) => {
    let current = root;
    let result = [];
    let previous;
    while(current !== null) {
        if (current.left !== null) {
            previous = current.left;
            while (previous.right !== null) { // Find the right most
                previous = previous.right;
            }
            previous.right = current;
            let temp = current;
            current = current.left;
            temp.left = null;
        } else {
            result.push(current.val);
            current = current.right;
        }
    }
    return result;
}


/*
    For debuging
    ---------------------------------------------------------
 */

// let node3 = new TreeNode(3);
// let node4 = new TreeNode(4);
// let node5 = new TreeNode(5);
// let node2 = new TreeNode(2, node4, node5);
// let root = new TreeNode(1, node2, node3);
//
// console.log(usingStack(root));
