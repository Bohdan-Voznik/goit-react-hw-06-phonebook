import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addCotact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/filter');
