import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, putFilter } from './actions';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    const checkName = state
      .map(contact => contact.name.toLowerCase())
      .some(contact => contact === action.payload.name.toLowerCase());
    if (!checkName) {
      return [...state, action.payload];
    } else {
      window.alert(`${action.payload.name} is already in contacts `);
    }
  },

  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filtersInitialState = () => '';
export const filtersReducer = createReducer(filtersInitialState, {
  [putFilter]: (state, action) => action.payload,
});

//   const deleteContact = contactId => {

//    setContacts(state => state.filter(contact => contact.id !== contactId))}

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];

//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);
// case toggleCompleted.type:
//   return state.map(task => {
//     if (task.id !== action.payload) {
//       return task;
//     }
//     return { ...task, completed: !task.completed };
//   });
//     default:
//       return state;
//   }
// };
