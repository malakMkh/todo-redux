import { configureStore } from '@reduxjs/toolkit';
import task from './taskslices/TaskSlice';
export const store = configureStore({
  reducer: { tasks: task },
});
