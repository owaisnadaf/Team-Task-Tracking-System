import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-6 screen">
      {/* Active Tasks */}
      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-bold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Active Task</h3>
      </div>

      {/* Completed Tasks */}
      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-bold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Completed Task</h3>
      </div>

      {/* Failed Tasks */}
      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-bold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Failed Task</h3>
      </div>

      {/* New Tasks */}
      <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-bold">{data.taskNumbers.new}</h2>
        <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;