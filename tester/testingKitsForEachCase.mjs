import assert from "assert";

/**
 * This function would be called by testing of each question case.
 * You should put this into "describe".
 * @param answers{Object}
 * @param testParasAndExpectedReturns{Array}
 */
let testingKitsForEachCase = (answers, testParasAndExpectedReturns) => {
    for (let answer in answers) {
        it(answer,  () => {
            console.log("\nTesting for function \"" + answer + "\"\n")
            for (let testParasAndExpectedReturn of testParasAndExpectedReturns) {
                console.log("Input: " + testParasAndExpectedReturn.para)
                let errMsg = "\n" + testParasAndExpectedReturn.msgIfErr + "\nInput parameters: " + testParasAndExpectedReturn.para.join(",");
                let returnResult = answers[answer](...testParasAndExpectedReturn.para);
                if (returnResult === undefined) {
                    throw new Error("Undefined return for function \"" + answer + "\"")
                }
                assert.strictEqual(returnResult.toString(), testParasAndExpectedReturn.expectedReturn.toString(), errMsg);
                console.log("Passed");
                console.log("------------------------")
            }
        });
    }
}

export default testingKitsForEachCase;
