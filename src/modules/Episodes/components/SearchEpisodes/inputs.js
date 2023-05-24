import { nanoid } from '@reduxjs/toolkit';

export const searchInput = {
  id: nanoid(),
  inputName: 'name',
};

export const selectInput = {
  id: nanoid(),
  inputName: 'episode',
  options: [
    { option: 'All seasons', value: '' },
    { option: 'Season 1', value: 'S01' },
    { option: 'Season 2', value: 'S02' },
    { option: 'Season 3', value: 'S03' },
    { option: 'Season 4', value: 'S04' },
    { option: 'Season 5', value: 'S05' },
  ],
};

export const inputs = [searchInput.inputName, selectInput.inputName];
