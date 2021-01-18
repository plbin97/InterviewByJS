import fs from "fs";
import path from "path";
let invalidCharListForFileName = ["?","\"", "\'", "*", "”", "‘", "<", ">", "|"];

/**
 *
 * @param pathFromParameters{String}
 * @returns {Promise<number>}
 *  0 represent good
 *  1 represent too long
 *  2 represent invalid char
 */
export let fileNameCheck = async (pathFromParameters) => {
    if (pathFromParameters.length > 128) {
        console.log("\x1B[31m%s\x1B[0m", "File path and name are too long; it should be no longer than 128 chars");
        process.exit(0);
    }
    for (let invalidChar of invalidCharListForFileName) {
        if (pathFromParameters.indexOf(invalidChar) !== -1) {
            console.log("\x1B[31m%s\x1B[0m", "File path and name contain invalid characters; it could not contains any of " + invalidCharListForFileName.join(" "));
            process.exit(0);
        }
    }
}

/**
 * Check if case files existed
 * @param pathFromParameters{String}
 * @returns {Promise<boolean>}
 */
export let caseFilesExisted = async (pathFromParameters) => {
    let result;
    let mjsPath = path.resolve("src/" + pathFromParameters + ".mjs");
    let testMjsPath = path.resolve("src/" + pathFromParameters + ".test.mjs");
    let readMePath = path.resolve("src/" + pathFromParameters + ".readme.md");
    try {
        result = fs.existsSync(mjsPath) && fs.existsSync(testMjsPath) && fs.existsSync(readMePath);
    } catch (err) {
        console.log("Error while reading files");
        console.log(err);
        process.exit(1);
    }
    return result;
}
