export const getValuesForReset = fieldsArr =>
  fieldsArr.reduce(
    (acc, inputName) => ({
      ...acc,
      [inputName]: '',
    }),
    {}
  );
