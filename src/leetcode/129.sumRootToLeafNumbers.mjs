
export let bfsSearch = (root) => {
    if (root === null) {
        return 0;
    }
    let queue = [];
    let sum = 0;
    queue.push([root, 0]);
    while (queue.length !== 0) {
        let [node, accu] = queue.shift();

        let newAccu = accu * 10 + node.val;
        if (node.left !== null) {
            queue.push([node.left, newAccu]);
        }
        if (node.right !== null) {
            queue.push([node.right, newAccu]);
        }
        if (node.left === null && node.right === null) {
            sum += newAccu;
        }
    }
    return sum;
}

