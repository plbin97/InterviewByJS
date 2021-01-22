import * as answers from './814.binaryTreePruning.mjs';
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";
import TreeNode from "../lib/TreeNode";

let node1 = new TreeNode(1);
let node2 = new TreeNode(0);
let node3 = new TreeNode(0);
let node4 = new TreeNode(0);
let node5 = new TreeNode(1,node2,node1);
let node6 = new TreeNode(0, node4, node3);
let root = new TreeNode(1, node6, node5);

const testParasAndExpectedReturns = [
    {
        para: [root],
        expectedReturn: true,
        msgIfErr: "You are idiot"
    }
];


describe("Binary Tree Pruning", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
