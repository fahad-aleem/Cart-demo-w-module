import { renameKeys } from "./renameKeys";

describe("renameKeys", () => {
  it("should properly rename keys", () => {
    const output = renameKeys({ foo: "bar", james: "john" })({
      foo: 1,
      james: 2,
    });

    expect(output).toStrictEqual({ bar: 1, john: 2 });
  });
});
