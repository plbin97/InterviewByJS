import * as answers from './isPossiblePath.mjs';
import testingKitsForEachCase from "../../tester/testingKitsForEachCase.mjs";
const testParasAndExpectedReturns = [
    {
        para: [1,4,5,9],
        expectedReturn: true,
        msgIfErr: "You are idiot"
    },
    {
        para: [1,1,5,2],
        expectedReturn: true,
        msgIfErr: "You are idiot"
    },
    {
        para: [1,4,5,8],
        expectedReturn: false,
        msgIfErr: "Wrong input in correct return"
    },
];

describe("isPossiblePath", () => {
    testingKitsForEachCase(answers, testParasAndExpectedReturns);
});
