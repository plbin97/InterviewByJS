import * as answers from './{{fileName}}.mjs';
import testingKitForEachCase from "{{pathToTestingKit}}tester/testingKitForEachCase.mjs";

const testParasAndExpectedReturns = [
    {
        para: ["para1", "para2"],
        expectedReturn: "",
        msgIfErr: "You are idiot"
    }
];


describe("{{title}}", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
