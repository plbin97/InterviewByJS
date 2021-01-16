import TreeNode from "../lib/TreeNode.mjs";
/**
 * Method1
 * @param root{TreeNode}
 * @returns {Array}
 */
export let printToStringAndSplit = (root) => {
    if (root === null) {
        return []
    }
    return printInorderedTree(root).split(",").map(x => +x);
}
let printInorderedTree = (root) => {
    return (root.left === null ? "" : printInorderedTree(root.left) + ",") +
        root.val +
        (root.right === null ? "" : "," + printInorderedTree(root.right));
}



export let intoArray = (root) => {
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
