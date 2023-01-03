import { createSlice } from '@reduxjs/toolkit';

// const filtersInitialState = () => '';
// const filtersInitialState = "";
const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    putFilter: (state, action) => (state = action.payload),
  },
});
// Экспортируем генераторы экшенов и редюсер
export const { putFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
