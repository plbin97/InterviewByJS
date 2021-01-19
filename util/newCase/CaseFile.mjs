import fs from "fs";
import path from "path";


export default class CaseFile {
    /**
     *
     * @param pathFromParameters{String}
     */
    constructor(pathFromParameters) {
        this.mjsPath = path.resolve("src/" + pathFromParameters + ".mjs");
        this.testMjsPath = path.resolve("src/" + pathFromParameters + ".test.mjs");
        this.readMePath = path.resolve("src/" + pathFromParameters + ".readme.md");
    }

    /**
     * Check if case files existed
     * @returns {Promise<boolean>}
     */
    async caseFilesExisted() {
        let result;
        try {
            result = fs.existsSync(this.mjsPath) && fs.existsSync(this.testMjsPath) && fs.existsSync(this.readMePath);
        } catch (err) {
            console.log("Error while reading files");
            console.log(err);
            process.exit(1);
        }
        return result;
    }
}
