export const required = value => (value ? undefined : "Required");
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength10 = maxLength(10);
export const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
