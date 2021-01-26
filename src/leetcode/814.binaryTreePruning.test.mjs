import * as answers from './814.binaryTreePruning.mjs';
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";
import TreeNode from "../lib/TreeNode.mjs";

let rootInput = new TreeNode(1,
    new TreeNode(1,
        new TreeNode(1,
            new TreeNode(0)
        ),
        new TreeNode(1)
        ),
    new TreeNode(0,
        new TreeNode(0),
        new TreeNode(1)
    )
    );
let expectedOutput = new TreeNode(1,
    new TreeNode(1,
        new TreeNode(1),
        new TreeNode(1)
    ),
    new TreeNode(0,
        null,
        new TreeNode(1)
    )
);

const testParasAndExpectedReturns = [
    {
        para: [rootInput],
        expectedReturn: expectedOutput,
        msgIfErr: "You are idiot"
    }
];


describe("Binary Tree Pruning", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
