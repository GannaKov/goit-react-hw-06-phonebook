import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
const contactsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState:  contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const checkName = state
      .map(contact => contact.name.toLowerCase())
      .some(contact => contact === action.payload.name.toLowerCase());
    if (!checkName) {
      state.push(action.payload);
    } else {
      window.alert(`${action.payload.name} is already in contacts `);
    }
      },
      prepare(name,number) {
        return {
            payload: { id: nanoid(), name, number },
        };
      },
    },
    deleteContact(state, action) {
        const index = state.findIndex(item => item.id === action.payload);
        state.splice(index, 1);
    },
   
  },
});
// Экспортируем генераторы экшенов и редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;