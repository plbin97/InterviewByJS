import * as answers from './112.pathSum.mjs';
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";
import TreeNode from "../lib/TreeNode.mjs";

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(7);
let node4 = new TreeNode(4, null, node1);
let node5 = new TreeNode(13);
let node6 = new TreeNode(11, node3, node2);
let node7 = new TreeNode(8, node5, node4);
let node8 = new TreeNode(4, node6, null);
let root = new TreeNode(5, node8, node7);


const testParasAndExpectedReturns = [
    {
        para: [root, 22],
        expectedReturn: true,
        msgIfErr: "You are idiot"
    },
    {
        para: [root, 30],
        expectedReturn: false,
        msgIfErr: "You are idiot"
    }
];


describe("112 Path Sum", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
