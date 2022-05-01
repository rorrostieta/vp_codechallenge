const Reader = require("../../lib/utils/Reader");

describe("Read a JSON file", () => {
    test("1. Reader.js  wth data", () => {
        const test = Reader.readJsonFile("./visualpartners.json");
        expect(test[0].name).toBe("Warren");
    });
});
