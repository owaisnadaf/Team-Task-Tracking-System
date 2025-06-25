import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

/**
 * Displays a horizontal scrollable list of tasks categorized by status
 * @param {Object} props - Component props
 * @param {Object} props.data - Contains the tasks array to display
 */
const TaskList = ({ data }) => {
  return (
    <div 
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {data.tasks.map((task, index) => {
        if (task.active) return <AcceptTask data={task} key={index} />;
        if (task.completed) return <CompleteTask data={task} key={index} />;
        if (task.failed) return <FailedTask data={task} key={index} />;
        if (task.newTask) return <NewTask data={task} key={index} />;
        
        return null; // Handle cases where task doesn't match any status
      })}
    </div>
  );
};

export default TaskList;