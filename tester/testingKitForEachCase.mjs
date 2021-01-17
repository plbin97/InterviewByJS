import assert from "assert";
import v8 from 'v8';


/**
 * This function would be called by testing of each question case.
 * You should put this into "describe".
 * @param answers{Object}
 * @param testParasAndExpectedReturns{Array}
 */
let testingKitForEachCase = (answers, testParasAndExpectedReturns) => {
    for (let answer in answers) {
        it(answer,  () => {
            console.log("\nTesting for function \"" + answer + "\"\n")
            for (let testParasAndExpectedReturn of testParasAndExpectedReturns) {
                let clonedParameters = cloneObject(testParasAndExpectedReturn.para); // Environmental isolation
                console.log("Input: " + clonedParameters)
                let errMsg = "\n" + testParasAndExpectedReturn.msgIfErr + "\nInput parameters: " + clonedParameters.join(",");
                let returnResult = answers[answer](...clonedParameters);
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

export default testingKitForEachCase;


let cloneObject = (obj) => {
    let bufferForClone = v8.serialize(obj);
    return v8.deserialize(bufferForClone);
}
