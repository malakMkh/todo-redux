import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/taskslices/TaskSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faEdit,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [onUpdate, setOnUpdate] = useState(false);
  const [newTask, setNewTask] = useState(task);
  return (
    /* ternary operator :
    condition ? expressionIfTrue : expressionIfFalse */

    <div
      className={`task ${task.isDone ? 'done' : 'notdone'}`}
      onClick={() => dispatch(updateTask({ ...newTask, isDone: !task.isDone }))}
    >
      {onUpdate ? (
        <>
          {' '}
          <input
            type="text"
            defaultValue={task.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <button
            onClick={() => {
              dispatch(updateTask(newTask));
              setOnUpdate(false);
            }}
          >
            {' '}
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button onClick={() => setOnUpdate(false)}>
            {' '}
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      ) : (
        <>
          <h2>{task.title}</h2>
          <button onClick={() => setOnUpdate(true)}>
            {' '}
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => dispatch(deleteTask(task))}>
            {' '}
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>{' '}
        </>
      )}
    </div>
  );
};

export default Task;
