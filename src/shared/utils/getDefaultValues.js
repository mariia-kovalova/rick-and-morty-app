export const getDefaultValues = (fieldsArr, searchParams) =>
  fieldsArr.reduce(
    (acc, inputName) => ({
      ...acc,
      [inputName]: searchParams.get(inputName) || '',
    }),
    {}
  );
