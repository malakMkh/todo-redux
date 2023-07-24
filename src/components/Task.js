import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskslices/TaskSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{task.title}</h2>
      <button>Update</button>
      <button onClick={() => dispatch(deleteTask(task))}>X</button>
    </div>
  );
};

export default Task;
