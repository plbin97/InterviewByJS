import * as answers from './twitterNewOfficeDesign.mjs';
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";

const testParasAndExpectedReturns = [
    {
        para: ["para1", "para2"],
        expectedReturn: "",
        msgIfErr: "You are idiot"
    }
];


describe("Twitter New Office Design", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
