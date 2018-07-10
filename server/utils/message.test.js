let expect = require("expect");
let {generateMessage} = require("./message");

describe("generateMessage", () => {

    it("should generate correct message object", () => {
        let result = generateMessage("Zali", "Hi");
        expect(result).toInclude({
            from: "Zali",
            text: "Hi"
        });
        expect(result.createdAt).toBeA("number");
    });

});