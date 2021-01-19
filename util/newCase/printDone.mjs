/**
 *
 * @param mjsPath{String}
 * @param testMjsPath{String}
 * @param readMePath{String}
 * @param caseName{String}
 * @returns {Promise<void>}
 */
export default async (mjsPath, testMjsPath, readMePath, caseName) => {
    console.log("");
    console.log("\x1B[36m%s\x1B[0m", "--------------------------------");
    console.log("");
    console.log("\x1B[36m%s\x1B[0m", "There are three files ");
    console.log("");
    console.log(mjsPath);
    console.log(testMjsPath);
    console.log(readMePath)
    console.log("");
    console.log("\x1B[36m%s\x1B[0m", "have been created for your new case ");
    console.log("");
    console.log(caseName);
    console.log("");
    console.log("\x1B[36m%s\x1B[0m", "Enjoy. ")
}
