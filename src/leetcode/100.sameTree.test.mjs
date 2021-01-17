import * as answers from './100.sameTree.mjs';
import TreeNode from "../lib/TreeNode.mjs";
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";

let node1_3 = new TreeNode(3);
let node1_2 = new TreeNode(2);
let node1_1 = new TreeNode(1, node1_2, node1_3);

let node2_3 = new TreeNode(3);
let node2_2 = new TreeNode(2);
let node2_1 = new TreeNode(1, node2_2, node2_3);

let node3_3 = new TreeNode(4);
let node3_2 = new TreeNode(2);
let node3_1 = new TreeNode(1, node3_2, node3_3);

// Put the testing parameters here
const testParasAndExpectedReturns = [
    {
        para: [node1_1, node2_1],
        expectedReturn: true,
        msgIfErr: "You are idiot"
    },
    {
        para: [node1_1, node3_1],
        expectedReturn: false,
        msgIfErr: "Should return false if not same"
    },
    {
        para: [null, null],
        expectedReturn: true,
        msgIfErr: "Should return true null data inputed"
    }
];


describe("Same Tree", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
