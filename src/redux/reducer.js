import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, putFilter } from './actions';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },

  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});
const filtersInitialState = () => '';
export const filtersReducer = createReducer(filtersInitialState, {
  [putFilter]: (state, action) => action.payload,
});
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
