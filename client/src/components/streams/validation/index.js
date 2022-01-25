export const required = (value) => (value ? undefined : "Required!");
export const minLength2 = (value) =>
  value && value.length < 2 ? "Must be 2 characters or more!" : undefined;
export const maxLength100 = (value) =>
  value && value.length > 100 ? "Must be 100 characters or less!" : undefined;
