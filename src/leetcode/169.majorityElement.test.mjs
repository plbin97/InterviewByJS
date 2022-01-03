import * as answers from './169.majorityElement.mjs';
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";

const testParasAndExpectedReturns = [
    {
        para: [[2,2,1,1,1,2,2]],
        expectedReturn: 2,
        msgIfErr: "You are idiot"
    }
];


describe("Majority Element", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
