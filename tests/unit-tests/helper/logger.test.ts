import "jest";
import { Logger } from "../../../src/helper/logger";

const logger=new Logger();
describe("Logger test cases", () => {
  test("Verify type of obejct", async () => {
    expect(logger).toBeInstanceOf(Logger);
  });

  test("Verify type of obejct", async () => {
    expect(Boolean(logger["log"])).toBe(true);
  });
  test("Verify type of return data", async () => {
   const r= logger["log"]("test");
    expect(r).toEqual(undefined);
  });


});