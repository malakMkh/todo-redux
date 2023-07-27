import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskslices/TaskSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 method from uuid
const Header = () => {
  const [newtask, SetNewTask] = useState({ title: '' });
  const dispatch = useDispatch();
  const id = uuidv4();
  return (
    <div className="header">
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
              id,
            })
          );
          SetNewTask({ title: '' });
        }}
      >
        <FontAwesomeIcon icon={faPlus} />{' '}
      </button>
    </div>
  );
};

export default Header;
