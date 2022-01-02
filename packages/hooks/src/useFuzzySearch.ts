import FuzzySearch from "fuzzy-search"; // Or: var FuzzySearch = require('fuzzy-search');

// eslint-disable-next-line @typescript-eslint/ban-types
export const useFuzzySearch = <T extends object | string>(
  haystack: T[],
  keys?: string[],
  options?: FuzzySearch.Options
) => {
  const searcher = new FuzzySearch(haystack, keys, options);

  const search = (needle: string) => searcher.search(needle);

  return search;
};
