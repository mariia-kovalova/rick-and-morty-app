export const nameNormalize = name => {
  if (name.length <= 13) return name;
  const start = name.slice(0, 11);
  return `${start}...`;
};
