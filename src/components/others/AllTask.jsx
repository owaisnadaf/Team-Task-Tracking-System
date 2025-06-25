import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

/**
 * Displays a task overview table for all employees
 * Shows counts for new, active, completed, and failed tasks
 * Uses authentication context to get employee task data
 */
const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5 h-65">
      {/* Table Header */}
      <div className="bg-[#87CEEB] mb-2 py-2 text-black px-4 flex mr-7 justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee name</h2>
        <h3 className="text-lg font-medium w-1/5 text-center">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 text-center">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 text-center">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 text-center">Failed</h5>
      </div>
     
      {/* Employee Task List */}
      <div className="h-[80%] overflow-auto">
        {userData.map((employee, index) => (
          <div 
            className="border-2 border-blue-400 mr-4 mb-2 py-2 px-4 flex justify-between rounded" 
            key={index}
          >
            <h2 className="text-lg font-medium w-1/5">{employee.name}</h2>
            <h3 className="text-lg font-medium w-1/5 text-center text-blue-500">
              {employee.taskNumbers.new}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-center text-yellow-600">
              {employee.taskNumbers.active}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-center text-green-400">
              {employee.taskNumbers.completed}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-center text-red-600">
              {employee.taskNumbers.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;