import { capitalize } from "./capitalize";

describe("Functions", () => {
  it("capitalize", () => {
    expect(capitalize("john doe")).toBe("John Doe");
  });
});
