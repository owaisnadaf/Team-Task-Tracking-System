import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
      {/* Task header */}
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.taskCategory}
        </h3>
        <h4 className="text-sm">
          {data.taskDate}
        </h4>
      </div>

      {/* Task content */}
      <h2 className="mt-5 text-2xl font-semibold">
        {data.taskTitle}
      </h2>
      <p className="text-sm mt-2">
        {data.taskDescription}  {/* Fixed from taskCategory to taskDescription */}
      </p>

      {/* Action button */}
      <div className="mt-6">
        <button className="w-full bg-green-600 rounded font-medium py-1 px-2 text-xs hover:bg-green-700">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;