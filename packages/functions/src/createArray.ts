export const createArray = (
  total: number,
  mapFunc: (value: undefined, index: number, array: undefined[]) => any
) => new Array(total).fill(undefined).map(mapFunc);
