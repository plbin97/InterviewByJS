import TreeNode from "../lib/TreeNode.mjs";
export let method1 = () => {
    let root = new TreeNode(
        1,
        new TreeNode(2),
        new TreeNode(3,
            new TreeNode(4),
            new TreeNode(5)
        )
    );
    let data = serializeTree(root);
    console.log(data);
    let newRoot = deserializeTree(data);
    let newData = serializeTree(newRoot);
    console.log(newData);
    return data === newData;
}

let serializeTree = (root) => {
    if (root === null) {
        return '';
    }
    let q = [root.left, root.right];
    let result = root.val;
    while(q.length > 0) {
        let node = q.shift();
        if (node === null) {
            result += ',';
        } else {
            result += ',' + node.val;
            q.push(node.left);
            q.push(node.right);
        }
    }
    return result;
}
let deserializeTree = (data) => {
    if (data === '') {
        return null;
    }
    let nodesNumber = data.split(',').map(str => {
        if (str === '') {
            return null;
        }
        return parseInt(str);
    });
    let que = [];
    let getANode = () => {
        if (nodesNumber.length > 0) {
            let number = nodesNumber.shift();
            if (number !== null) {
                let n = new TreeNode(number);
                que.push(n);
                return n;
            }
        }
        return null
    }
    let root = getANode();
    while (nodesNumber.length > 0) {
        let node = null;
        if (que.length === 0) {
            node = getANode();
        } else {
            node = que.shift();
        }
        if (node !== null) {
            let left = getANode();
            let right = getANode();
            node.left = left;
            node.right = right;
        }
    }
    return root;


}
