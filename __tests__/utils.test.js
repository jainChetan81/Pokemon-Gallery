import paddedString from "../utils/index.ts";

describe("Utilities test", () => {
	it("should return incremented padded string when a single digit is provided", async () => {
		const divElement = paddedString(1, 3);
		expect(divElement).toBe("002");
	});
	it("should return incremented padded string when a double digit is provided", async () => {
		const divElement = paddedString(22, 3);
		expect(divElement).toBe("023");
	});
	it("should return incremented string when triple digit is provided", async () => {
		const divElement = paddedString(223, 3);
		expect(divElement).toBe("224");
	});
	it("should return incremented string when 4 digit is provided", async () => {
		const divElement = paddedString(2234, 3);
		expect(divElement).toBe("2235");
	});
});
