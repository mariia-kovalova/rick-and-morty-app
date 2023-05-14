export const spiecesNormalize = spieces => {
  if (spieces.length <= 10) return spieces;
  const start = spieces.slice(0, 5);
  return `${start}...`;
};
