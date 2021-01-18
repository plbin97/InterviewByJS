import * as answers from './example.mjs';
import testingKitForEachCase from "../tester/testingKitForEachCase.mjs";

// Put the testing parameters here
const testParasAndExpectedReturns = [
    {
        para: [1, 2, 3], // Parameters, in array.
        expectedReturn: 6, // expected return.
        msgIfErr: "You are idiot"  // Display on error.
    },
    {
        para: [1, 1, 1],
        expectedReturn: 3,
        msgIfErr: "You are idiot"
    }
];


describe("example", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
