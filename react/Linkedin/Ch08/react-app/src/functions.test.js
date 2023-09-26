import { timesTwo } from "./functions";

// args: 1. name of test, 2. function to test
// uses jest to test the function
// jest will run any file with .test.js extension
test("Multiplies by 2", () => {
  expect(timesTwo(4)).toBe(8);
});