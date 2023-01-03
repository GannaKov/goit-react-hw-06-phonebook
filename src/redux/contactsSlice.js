import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
const contactsInitialState = {contacts:[]};

const contactsSlice = createSlice({
  name: "contacts",
  initialState:  contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        
      state.contacts.push(action.payload);
   
      },
      prepare(name,number) {
        return {
            payload: { id: nanoid(), name, number },
        };
      },
    },
    deleteContact(state, action) {
        const index = state.contacts.findIndex(item => item.id === action.payload);
        state.contacts.splice(index, 1);
    },
   
  },
});
// Экспортируем генераторы экшенов и редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;