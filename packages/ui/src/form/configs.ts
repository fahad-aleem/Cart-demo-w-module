export const autoSubmitValidation = {
  setValueAs: v => (v === "" ? null : v),
  validate: v => v === null || v !== "",
};
