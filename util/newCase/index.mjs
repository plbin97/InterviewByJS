import displayUsage from "./displayUsage.mjs";
import {caseFilesExisted} from "./filesHandle.mjs";
import readCaseNameFromUser from "./readCaseNameFromUser.mjs";

(async () => {
    let parameters = process.argv;
    if (parameters[2] === undefined) {
        console.log("\x1B[31m%s\x1B[0m", "No parameter")
        await displayUsage();
        process.exit(0);
    }
    if (await caseFilesExisted(parameters[2])) {
        console.log('\x1B[36m%s\x1B[0m', "Case files `" + parameters[2] + "` existed, please use another filename. ")
        process.exit(0);
    }

    let caseName = await readCaseNameFromUser().catch((reason) => {
        console.log(reason);
        process.exit(0);
    })
    console.log(caseName);



})();
