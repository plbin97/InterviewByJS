import TreeNode from "../lib/TreeNode.mjs";

/**
 * 1, Recursion Method
 * @param p{TreeNode}
 * @param q{TreeNode}
 * @returns {boolean}
 */
export let recursion = (p,q) => {
    if (p == null && q == null) {
        return true;
    }
    if (p == null || q == null) {
        return false;
    }

    return (p.val === q.val) && recursion(p.left, q.left) && recursion(p.right, q.right);
}


export let iteration = (p,q) => {
    if (p === null && q === null) {
        return true;
    }
    if (!iterationCheck(p,q)) {
        return false;
    }
    let queueForP = [];
    let queueForQ = [];
    queueForP.push(p);
    queueForQ.push(q);
    while (queueForP.length !== 0) {
        let pBranch = queueForP.shift();
        let qBranch = queueForQ.shift();
        if (!iterationCheck(pBranch, qBranch)) {
            return false;
        }
        if (pBranch.left === null && qBranch.left === null) {

        } else if (pBranch.left === null || qBranch.left === null){
            return false;
        } else {
            queueForQ.push(qBranch.left);
            queueForP.push(pBranch.left);
        }

        if (pBranch.right === null && qBranch.right === null) {

        } else if (pBranch.right === null || qBranch.right === null){
            return false;
        } else {
            queueForQ.push(qBranch.right);
            queueForP.push(pBranch.right);
        }
    }
    return true
}

let iterationCheck = (p,q) => {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    return p.val === q.val;
}

