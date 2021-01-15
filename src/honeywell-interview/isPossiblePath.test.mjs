import * as answers from './isPossiblePath.mjs';
import assert from 'assert';
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
    for (let answer in answers) {
        it(answer,  () => {
            for (let testParasAndExpectedReturn of testParasAndExpectedReturns) {
                let errMsg = "\n" + testParasAndExpectedReturn.msgIfErr + "\nInput parameters: " + testParasAndExpectedReturn.para.join(",");
                assert.strictEqual(answers[answer](...testParasAndExpectedReturn.para), testParasAndExpectedReturn.expectedReturn, errMsg);
            }
        });
    }
});
