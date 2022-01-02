export const stringToRegex = (string: string) =>
  // eslint-disable-next-line no-useless-escape
  string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
