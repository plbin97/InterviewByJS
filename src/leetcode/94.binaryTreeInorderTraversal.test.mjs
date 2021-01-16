import * as answers from './94.binaryTreeInorderTraversal.mjs';
import TreeNode from "../lib/TreeNode.mjs";
import testingKitsForEachCase from "../../tester/testingKitsForEachCase.mjs";

let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node2 = new TreeNode(2, node4, node5);
let root = new TreeNode(1, node2, node3);

// Put the testing parameters here
const testParasAndExpectedReturns = [
    {
        para: [root],
        expectedReturn: [4, 2, 5, 1, 3],
        msgIfErr: "You are idiot"
    },
    {
        para: [null],
        expectedReturn: [],
        msgIfErr: "Null should return empty array"
    },
    {
        para: [node5],
        expectedReturn: [5],
        msgIfErr: "Not dealing with single node"
    }
];


describe("BinaryTree Inorder Traversal", () => {
    testingKitsForEachCase(answers, testParasAndExpectedReturns);
});
