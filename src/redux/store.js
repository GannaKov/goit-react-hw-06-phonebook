import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { contactsReducer, filtersReducer } from './reducer';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';


const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactReducer = persistReducer(persistConfig, contactsReducer)
export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
  filter: filtersReducer,
  },
});

export const persistor = persistStore(store)
