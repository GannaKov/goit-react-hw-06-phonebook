import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filtersReducer } from './reducer';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  filter: filtersReducer,
  },
});

//filters: filtersReducer,
