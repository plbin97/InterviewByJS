import readline from "readline"

let invalidCharList = ["?","\"", "\'", "*", "”", "‘", "<", ">", "|"];

export default () => {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log("\x1B[36m%s\x1B[0m", "Please Input the Name of the question case");
        rl.question("", (answer) => {
            rl.close();
            let checkResult = checkForTheAnswer(answer)
            switch (checkResult) {
                case 0:
                    resolve(answer);
                    return ;
                case 1:
                    reject("Case name is too long; it should be no longer than 64 chars");
                    return ;
                case 2:
                    reject("Case name contains invalid characters; it could not contains any of " + invalidCharList.join(" "))
                    return ;
            }
            resolve(answer);
        });
    });
}

/**
 * Check for answer from user input
 * @param answer{String}
 * @returns {number}
 *  0 represent good
 *  1 represent too long
 *  2 represent invalid char
 */
let checkForTheAnswer = (answer) => {
    if (answer.length > 64) {
        return 1;
    }
    for (let invalidChar of invalidCharList) {
        if (answer.indexOf(invalidChar) !== -1) {
            return 2
        }
    }
    return 0;
}
