export const getCleanValues = values => {
  return Object.entries(values).reduce(
    (acc, [key, value]) => (value !== '' ? { ...acc, [key]: value } : acc),
    {}
  );
};
