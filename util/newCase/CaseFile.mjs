import fs from "fs-extra";
import path from "path";
import {readMjs, readReadme, readTestMjs} from "./readTemplate.mjs";


export default class CaseFile {
    /**
     *
     * @param pathFromParameters{String}
     */
    constructor(pathFromParameters) {
        this.fileNameFromParam = pathFromParameters;
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
            result = fs.pathExistsSync(this.mjsPath) && fs.pathExistsSync(this.testMjsPath) && fs.pathExistsSync(this.readMePath);
        } catch (err) {
            console.log(err);
            console.log('\x1B[31m%s\x1B[0m',"Error while reading files");
            process.exit(0);
        }
        return result;
    }

    /**
     *
     * @param caseName{String}
     * @returns {Promise<void>}
     */
    async createCaseFiles(caseName) {
        let mjsContent = await readMjs();
        let readMeContent = await readReadme(caseName);
        let testMjsContent = await readTestMjs(caseName, this.fileNameFromParam);
        await this.createFile(this.mjsPath, mjsContent);
        await this.createFile(this.testMjsPath, testMjsContent);
        await this.createFile(this.readMePath, readMeContent);
    }

    /**
     *
     * @param filePath{String}
     * @param content{String}
     * @returns {Promise<void>}
     */
    createFile(filePath, content) {
        return new Promise((resolve, reject) => {
            fs.outputFile(filePath, content, (err) => {
                if (err) {
                    console.log(err);
                    console.log('\x1B[31m%s\x1B[0m',"Error while writing files");
                    process.exit(0);
                    reject();
                }
                resolve();
            });
        })
    }

}
