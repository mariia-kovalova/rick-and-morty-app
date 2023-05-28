const { nanoid } = require('@reduxjs/toolkit');

export const inputs = ['name', 'type', 'dimesion'];

export const filedsArr = [
  { id: nanoid(), inputName: 'name', placeholder: 'Filter by name...' },
  { id: nanoid(), inputName: 'type', placeholder: 'Filter by type...' },
  {
    id: nanoid(),
    inputName: 'dimension',
    placeholder: 'Filter by dimension...',
  },
];
