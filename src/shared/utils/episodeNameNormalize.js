export const episodeNameNoramlize = episodeName => {
  if (episodeName.length <= 15) return episodeName;
  const start = episodeName.slice(0, 13);
  return `${start}...`;
};
