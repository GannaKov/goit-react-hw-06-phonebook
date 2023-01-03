import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';
// {
//   contacts: [],
//   filter: ""
// }

export const addContact = createAction('contact/addContact', (name, number) => {
  return {
    payload: { id: nanoid(), name, number },
  };
});

export const deleteContact = createAction('contact/deleteContact');
// export const toggleCompleted = createAction('contact/toggleCompleted');
//export const setStatusFilter = createAction('filters/setStatusFilter');

export const putFilter = createAction('filters/putFilter', value => {
  return { payload: value };
});
