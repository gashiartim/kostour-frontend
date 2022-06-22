export const capitalize = ([first, ...rest]: any) =>
  first.toUpperCase() + rest.join("").toLowerCase();
