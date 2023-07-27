import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const taskSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    /*the reducer are function */
    addTask: (state, action) => {
      /* push used to add but it change the original table no need to return  */
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      /*return a filtred !copy! of the table */
      return state.filter((el) => el.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      /**/
      return state.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
