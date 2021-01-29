import * as answers from './391.perfectRectangle.mjs';
import testingKitForEachCase from "../../tester/testingKitForEachCase.mjs";
let rct1 = [
    [1,1,3,3],
    [3,1,4,2],
    [3,2,4,4],
    [1,3,2,4],
    [2,3,3,4]
];

let rct2 = [
    [1,1,2,3],
    [1,3,2,4],
    [3,1,4,2],
    [3,2,4,4]
];

let rct3 = [
    [1,1,3,3],
    [3,1,4,2],
    [1,3,2,4],
    [3,2,4,4]
];

let rct4 = [
    [1,1,3,3],
    [3,1,4,2],
    [1,3,2,4],
    [2,2,4,4]
];

const testParasAndExpectedReturns = [
    {
        para: [rct1],
        expectedReturn: true,
        msgIfErr: "You are idiot"
    },
    {
        para: [rct2],
        expectedReturn: false,
        msgIfErr: "You are idiot"
    },
    {
        para: [rct3],
        expectedReturn: false,
        msgIfErr: "You are idiot"
    },
    {
        para: [rct4],
        expectedReturn: false,
        msgIfErr: "You are idiot"
    }
];


describe("391 Perfect Rectangle", () => {
    testingKitForEachCase(answers, testParasAndExpectedReturns);
});
