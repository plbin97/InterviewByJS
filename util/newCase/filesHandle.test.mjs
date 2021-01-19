import CaseFile from "./CaseFile.mjs";
import path from "path";
import assert from "assert";

describe("File Handle", () => {
    let caseFile1 = new CaseFile("example");
    let caseFile2 = new CaseFile("something/something");
    it('File existed test', async () => {
        assert.strictEqual(await caseFile1.caseFilesExisted(), true);
        assert.strictEqual(await caseFile2.caseFilesExisted(), false);
    });

})
