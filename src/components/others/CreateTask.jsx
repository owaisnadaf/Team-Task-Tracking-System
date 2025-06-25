import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { updateEmployees } from "../../utils/localStorage";

/**
 * Component for creating and assigning new tasks to employees
 * Includes form fields for task details and handles task submission
 */
const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  
  // Form state
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  /**
   * Handles form submission to create a new task
   * @param {Event} e - Form submit event
   */
  const submitHandler = (e) => {
    e.preventDefault();
    
    // Create new task object
    const newTask = { 
      taskTitle,
      taskDescription, 
      taskDate, 
      taskCategory, 
      active: false, 
      newTask: true, 
      failed: false, 
      completed: false 
    };

    // Update employee data with new task
    const updatedData = [...userData];
    let taskAssigned = false;
    
    updatedData.forEach((employee) => {
      if (employee.name === assignTo) {
        employee.tasks.push(newTask);
        employee.taskNumbers.new += 1;
        taskAssigned = true;
      }
    });

    if (!taskAssigned) {
      alert("No employee found with that name!");
      return;
    }

    // Update state and local storage
    setUserData(updatedData);
    updateEmployees(updatedData);
    
    // Reset form fields
    setAssignTo("");
    setTaskCategory("");
    setTaskDate("");
    setTaskDescription("");
    setTaskTitle("");
  };

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
        
        {/* Left Column - Input Fields */}
        <div className="w-1/2">
          <div className="mb-4">
            <label className="text-sm text-gray-300 mb-0.5 block">Task Title</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Make a UI design"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-300 mb-0.5 block">Date</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-300 mb-0.5 block">Assign to</label>
            <input
              type="text"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="Employee name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-300 mb-0.5 block">Category</label>
            <input
              type="text"
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              placeholder="design, dev, etc"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              required
            />
          </div>
        </div>

        {/* Right Column - Description and Submit */}
        <div className="w-2/5 flex flex-col items-start">
          <label className="text-sm text-gray-300 mb-0.5 block">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 mb-4"
            required
          />

          <button 
            type="submit" 
            className="bg-[#87CEEB] py-3 hover:bg-[#6495ED] px-5 text-sm rounded mt-4 w-full text-black transition-colors"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;