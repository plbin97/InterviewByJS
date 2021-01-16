import * as answers from './asciiEncodedString.mjs';
import testingKitsForEachCase from "../../tester/testingKitsForEachCase.mjs";
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
    testingKitsForEachCase(answers, testParasAndExpectedReturns);
});
