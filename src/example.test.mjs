import * as answers from './example.mjs';
import assert from 'assert';

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
    for (let answer in answers) {
        it(answer,  () => {
            for (let testParasAndExpectedReturn of testParasAndExpectedReturns) {
                let errMsg = "\n" + testParasAndExpectedReturn.msgIfErr + "\nInput parameters: " + testParasAndExpectedReturn.para.join(",");
                assert.strictEqual(answers[answer](...testParasAndExpectedReturn.para), testParasAndExpectedReturn.expectedReturn, errMsg);
            }
        });
    }
});
