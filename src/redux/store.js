import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

// import { contactsReducer, filtersReducer } from './reducer';
import { filtersReducer } from './filterSlice';
import { contactPersistReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactPersistReducer,
    filter: filtersReducer,
  },
});

export const persistor = persistStore(store);
