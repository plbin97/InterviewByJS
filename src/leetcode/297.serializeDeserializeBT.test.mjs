import * as answers from './297.serializeDeserializeBT.mjs';
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";

const testParasAndExpectedReturns = [
    {
        para: [],
        expectedReturn: true,
        msgIfErr: "You are idiot"
    }
];


describe("Serialize and Deserialize Binary Tree", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
