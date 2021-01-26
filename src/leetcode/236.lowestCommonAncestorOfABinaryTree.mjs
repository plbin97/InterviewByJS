import TreeNode from "../lib/TreeNode.mjs";

/**
 * 1, Recursion method
 * @param root{TreeNode}
 * @param p{TreeNode}
 * @param q{TreeNode}
 * @returns {TreeNode}
 */
export let recursion = (root, p, q) => {
    let result;
    let finder = (root) => {
        if (root === null) {
            return false;
        }
        let left = finder(root.left, p, q) ? 1 : 0;
        let right = finder(root.right, p, q) ? 1 : 0;
        let self = (root.val === p.val || root.val === q.val) ? 1: 0;

        if ((left + right + self) > 1) {
            result = root;
        }
        return (left + right + self) > 0;
    }
    finder(root);
    return result;
}

