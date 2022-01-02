import { cond, T, append, filter, complement, equals, includes } from "ramda";

export const toggleInArray = <T>(
  item: T,
  arr: T[],
  insertFunc: (el: T) => (list: T[]) => T[] = append
) =>
  cond([
    [includes(item), filter(complement(equals(item)))],
    [T, insertFunc(item)],
  ])(arr);
