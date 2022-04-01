import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { addCotact, deleteContact, changeFilter } from './contacts-actions';

export const itemReducer = createReducer([], {
  [addCotact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  item: itemReducer,
  filter: filterReducer,
});
