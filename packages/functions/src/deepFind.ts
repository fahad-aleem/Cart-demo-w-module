/**
 *
 * @param obj => nested object
 * @param path => "." joined path => "deep.path.to.prop"
 * @returns obj[deep][path][to][prop] || undefined
 */
export function deepFind(obj: unknown, path: string): unknown | undefined {
  const paths = path.split(".");
  let current = obj;
  let i: number;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }

  return current;
}
