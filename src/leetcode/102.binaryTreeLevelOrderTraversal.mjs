import TreeNode from "../lib/TreeNode.mjs";

/**
 * 1, Recursive Method
 * @param root{TreeNode}
 * @returns {[][]}
 */
export let recursion = (root) => {
    if (root === null) {
        return [];
    }
    let result = [];
    recursionHelper(root, 0, result);
    return result;
}

/**
 * Helper function for 1
 * @param node{TreeNode}
 * @param level{Number}
 * @param arr{[][]}
 */
let recursionHelper = (node, level, arr) => {
    if (arr[level] === undefined) {
        arr[level] = [];
    }
    arr[level].push(node.val);
    if (node.left !== null) {
        recursionHelper(node.left, level + 1, arr);
    }
    if (node.right !== null) {
        recursionHelper(node.right, level + 1, arr);
    }
}

/**
 * 2, Iteration Method
 * @param root{TreeNode}
 * @returns {[][]}
 */
export let iteration = (root) => {
    if (root === null) {
        return [];
    }
    let result = [];
    let queue = [];
    queue.push(root);
    let level = 0;

    while (queue.length !== 0) {
        let levelLength = queue.length;
        result[level] = [];
        for (let i = 0; i < levelLength; i ++) {
            let node = queue.shift();
            result[level].push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        level ++;
    }
    return result;
}
