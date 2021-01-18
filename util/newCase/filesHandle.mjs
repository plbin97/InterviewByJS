import fs from "fs";
import path from "path";
let invalidCharListForFileName = ["?","\"", "\'", "*", "”", "‘", "<", ">", "|"];

export let fileNameCheck = (pathFromParameters) => {

}

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
