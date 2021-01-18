import * as answers from './102.binaryTreeLevelOrderTraversal.mjs';
import TreeNode from "../lib/TreeNode.mjs";
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";

let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node2 = new TreeNode(2, node4, node5);
let root = new TreeNode(1, node2, node3);

// Put the testing parameters here
const testParasAndExpectedReturns = [
    {
        para: [root],
        expectedReturn: [
            [1],
            [2,3],
            [4,5]
        ],
        msgIfErr: "You are idiot"
    },
    {
        para: [null],
        expectedReturn: [],
        msgIfErr: "Return [] when parameter is null"
    }
];


describe("Binary Tree Level Order Traversal", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
