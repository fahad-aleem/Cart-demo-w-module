import { debounce } from "./debounce";

describe("debounce", () => {
  const wait = (n = 50) =>
    new Promise(resolve => {
      setTimeout(() => resolve(true), n);
    });

  it("should be called once", async () => {
    const mock = jest.fn();

    const debouncedFunc = debounce(mock);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    await wait();

    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("should be called twice", async () => {
    const mock = jest.fn();

    const debouncedFunc = debounce(mock);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    await wait(51);

    debouncedFunc();

    await wait(51);

    expect(mock).toHaveBeenCalledTimes(2);
  });
});
