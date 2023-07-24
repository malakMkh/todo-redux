import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskslices/TaskSlice';

const Header = () => {
  const [newtask, SetNewTask] = useState({ title: '' });
  const dispatch = useDispatch();
  return (
    <div>
      {' '}
      <input
        value={newtask.title}
        type="text"
        placeholder="Enter task"
        onChange={(e) => SetNewTask({ ...newtask, title: e.target.value })}
      ></input>
      <button
        onClick={(e) => {
          dispatch(
            addTask({
              ...newtask,
              isDone: false,
              id: Math.floor(Math.random() + 10000000000000),
            })
          );
          SetNewTask({ title: '' });
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default Header;
