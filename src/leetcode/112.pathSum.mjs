import TreeNode from "../lib/TreeNode.mjs";
/**
 * 1, Recursion method
 * @param root{TreeNode}
 * @param sum{Number}
 * @returns {boolean}
 */
export let recursion = (root, sum) => {
    if (root === null) {
        return false;
    }
    sum -= root.val;
    if ((root.left === null) && (root.right === null)) {
        return sum === 0;
    }
    return recursion(root.left, sum) || recursion(root.right, sum);
}

/**
 * 2, BFS search method
 * @param root{TreeNode}
 * @param sum{Number}
 * @returns {boolean}
 */
export let bfsSearch = (root, sum) => {
    if (root == null) {
        return false;
    }
    let queue = [];
    queue.push([root, 0]);
    while (queue.length !== 0) {
        let [node, accu] = queue.shift();
        accu += node.val;
        if (node.left !== null) {
            queue.push([node.left, accu]);
        }
        if (node.right !== null) {
            queue.push([node.right, accu]);
        }
        if (node.left === null && node.right === null) {
            if (accu === sum) {
                return true;
            }
        }

    }
    return false;
}
