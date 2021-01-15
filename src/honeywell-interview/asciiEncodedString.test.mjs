import * as answers from './asciiEncodedString.mjs';
import assert from 'assert';
const testParasAndExpectedReturns = [
    {
        para: ["701011792823411101701997927"],
        expectedReturn: "Hacker Rank",
        msgIfErr: "You are idiot"
    },
    {
        para: ["022321"],
        expectedReturn: "",
        msgIfErr: "Should return \"\" when input value is wrong. "
    },
    {
        para: [""],
        expectedReturn: "",
        msgIfErr: "Should return \"\" when input value is empty. "
    },
];

describe("asciiEncodedString", () => {
    for (let answer in answers) {
        it(answer,  () => {
            for (let testParasAndExpectedReturn of testParasAndExpectedReturns) {
                let errMsg = "\n" + testParasAndExpectedReturn.msgIfErr + "\nInput parameters: " + testParasAndExpectedReturn.para.join(",");
                assert.strictEqual(answers[answer](...testParasAndExpectedReturn.para), testParasAndExpectedReturn.expectedReturn, errMsg);
            }
        });
    }
});
