import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TasksList = () => {
  const tasklists = useSelector((store) => store.tasks);

  return (
    <div className="list">
      {tasklists.map((task, id) => (
        <Task Key={id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
