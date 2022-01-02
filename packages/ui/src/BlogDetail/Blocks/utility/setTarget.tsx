export const setTarget = (href): string => {
  if (!href.includes("goldn.com")) {
    return "_blank";
  }
  return "_self";
};
