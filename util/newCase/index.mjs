import displayUsage from "./displayUsage.mjs";
import CaseFile from "./CaseFile.mjs";
import readCaseNameFromUser from "./readCaseNameFromUser.mjs";
import checkFileName from "./checkFileName";

(async () => {
    let parameters = process.argv;
    if (parameters[2] === undefined) {
        console.log("\x1B[31m%s\x1B[0m", "No parameter")
        await displayUsage();
        process.exit(0);
    }
    await checkFileName(parameters[2]);
    let caseFile = new CaseFile(parameters[2])
    if (await caseFile.caseFilesExisted()) {
        console.log('\x1B[36m%s\x1B[0m', "Case files `" + parameters[2] + "` existed, please use another filename. ")
        process.exit(0);
    }
    let caseName = await readCaseNameFromUser().catch((reason) => {
        console.log("");
        console.log("\x1B[31m%s\x1B[0m", reason);
        process.exit(0);
    })





})();
