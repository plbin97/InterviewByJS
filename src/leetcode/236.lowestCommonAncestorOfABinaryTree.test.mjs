import * as answers from './236.lowestCommonAncestorOfABinaryTree.mjs';
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";
import TreeNode from "../lib/TreeNode.mjs";

let root = new TreeNode(3,
    new TreeNode(5,
        new TreeNode(6),
        new TreeNode(2,
            new TreeNode(7),
            new TreeNode(4)
        )
    ),
    new TreeNode(1,
        new TreeNode(0),
        new TreeNode(8)
    )
);

const testParasAndExpectedReturns = [
    {
        para: [root, root.left, root.right],
        expectedReturn: root,
        msgIfErr: "You are idiot"
    },
    {
        para: [root, root.left, root.left.right.right],
        expectedReturn: root.left,
        msgIfErr: "You are idiot"
    }
];


describe("236 Lowest Common Ancestor of a Binary Tree", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
