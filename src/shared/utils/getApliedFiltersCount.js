import { getCleanValues } from './getCleanValues';
import { getSearchValues } from './getSearchValues';

export const getApliedFiltersCount = (inputs, searchParams) => {
  return Object.keys(getCleanValues(getSearchValues(inputs, searchParams)))
    .length;
};
