let invalidCharListForFileName = ["?","\"", "\'", "*", "”", "‘", "<", ">", "|"];

/**
 *
 * @param pathFromParameters{String}
 * @returns {Promise<number>}
 *  0 represent good
 *  1 represent too long
 *  2 represent invalid char
 */
export default async (pathFromParameters) => {
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
