import TreeNode from "../lib/TreeNode.mjs";

export let pruning = (root) => {
    return isOne(root) ? root : null;
}

let isOne = (root) => {
    if (root == null) {
        return false;
    }
    let left = isOne(root.left);
    let right = isOne(root.right);
    let center = root.val === 1;
    if (! left) {
        root.left = null;
    }
    if (! right) {
        root.right = null;
    }
    return center || left || right;
}

