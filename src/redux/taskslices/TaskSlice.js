import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const taskSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state = state.push(action.payload);
    },
    deleteTask: (state, action) => {
      state = state.filter((el) => el.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
