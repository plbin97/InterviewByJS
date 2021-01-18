import {caseFilesExisted} from "./filesHandle.mjs";
import path from "path";
import assert from "assert";

describe("File Handle", () => {
    it('File existed test', async () => {
        let resultOfTrue = await caseFilesExisted("example");
        assert.strictEqual(resultOfTrue, true);

        let resultOfFalse = await caseFilesExisted("something/something");
        assert.strictEqual(resultOfFalse, false);
    });
})
