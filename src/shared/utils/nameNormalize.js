export const nameNormalize = name => {
  if (name.length <= 13) return name;
  const start = name.slice(0, 11);
  return `${start}...`;
};

export const characterNameNormalize = name => {
  if (name.length <= 24) return name;
  const start = name.slice(0, 22);
  return `${start}...`;
};
