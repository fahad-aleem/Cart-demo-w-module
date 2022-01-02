import { pickDefinedNonEmpty } from "./pickDefinedNonEmpty";

describe("pickDefinedNonEmpty", () => {
  it("should remove undefined, null and empty", () => {
    const output = pickDefinedNonEmpty({
      a: null,
      b: undefined,
      c: "exists",
      d: "",
      e: [],
      f: 0,
    });

    expect(output).toStrictEqual({ c: "exists", f: 0 });
  });
});
