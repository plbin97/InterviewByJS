import * as answers from './129.sumRootToLeafNumbers.mjs';
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";
import TreeNode from "../lib/TreeNode.mjs";

let node1 = new TreeNode(3);
let node2 = new TreeNode(2);
let root = new TreeNode(1, node2, node1);

const testParasAndExpectedReturns = [
    {
        para: [root],
        expectedReturn: 25,
        msgIfErr: "You are idiot"
    }
];


describe("129 Sum Root to Leaf Numbers", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});

