import {describe, test, expect} from "@jest/globals";
import sumOfSquareDiff from "./index";

describe("The difference between sum of squares and the square of sum of natural numbers", () => {
	test("Difference between the sum of squares of the first 10 natural numbers and the square of their sum", () => {
		expect(sumOfSquareDiff(10)).toEqual(2640);
	});

	test("Difference between the sum of squares of the first 100 natural numbers and the square of their sum", () => {
		expect(sumOfSquareDiff(100)).toEqual(25164150);
	});
});