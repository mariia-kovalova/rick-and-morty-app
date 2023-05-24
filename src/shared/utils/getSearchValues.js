export const getSearchValues = (fieldsArr, searchParams) =>
  fieldsArr.reduce(
    (acc, inputName) => ({
      ...acc,
      [inputName]: searchParams.get(inputName) || '',
    }),
    {}
  );
