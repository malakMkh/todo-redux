import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const TasksList = () => {
  const tasklists = useSelector((store) => store.tasks);

  return (
    <div>
      {tasklists.map((task, i) => (
        <Task Key={i} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
