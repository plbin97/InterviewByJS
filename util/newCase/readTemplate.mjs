import fs from 'fs';
import path from 'path';


/**
 * Get the question case file, such as xxx.mjs
 * @returns {Promise<String>}
 */
export let readMjs = async () => {
    return await readTemplateFile( 'sample.mjs');
}

/**
 * Get the readme file of the case, such as xxx.readme.md
 * @param caseName{String}
 * @returns {Promise<String>}
 */
export let readReadme = async (caseName) => {
    let readmeTemplate = await readTemplateFile("sample.readme.md");
    return readmeTemplate.replace("{{title}}", caseName);
}

/**
 * Get the test file of the case, such as xxx.test.mjs
 * @param caseName{String}
 * @param fileNameFromParam{String}
 * @returns {Promise<string>}
 */
export let readTestMjs = async (caseName, fileNameFromParam) => {
    let testMjsTemplate = await readTemplateFile("sample.test.mjs");
    let fileName;
    let pathToTestingKit = "";
    let filePathArr = fileNameFromParam.split("/");
    let filteredFilePathArr = [];
    filePathArr.forEach((element) => {
        if (element !== null) {
            filteredFilePathArr.push(element);
            pathToTestingKit += "../"
        }
    });
    fileName = filteredFilePathArr[filteredFilePathArr.length - 1];

    return testMjsTemplate
        .replace("{{fileName}}", fileName)
        .replace("{{pathToTestingKit}}", pathToTestingKit)
        .replace("{{title}}", caseName);
}

/**
 * Get any content from template folder
 * @param fileName{String}
 * @returns {Promise<String>}
 */
let readTemplateFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve("util/newCase/template/" + fileName), "utf8", (err, data) => {
            if (err) {
                console.log(err);
                console.log('\x1B[31m%s\x1B[0m',"Error while reading files")
                process.exit(0);
                reject();
            }
            resolve(data);
        })
    });
}

