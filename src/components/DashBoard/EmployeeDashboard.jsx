import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../Task/TaskList';

/**
 * Employee Dashboard Component
 * 
 * Main dashboard layout for employees containing:
 * - Header with user info and logout functionality
 * - Task statistics overview
 * - Task list display
 * 
 * @param {Object} props - Component props
 * @param {Object} props.data - User authentication data
 * @param {Function} props.changeUser - Function to handle user change/logout
 */
const EmployeeDashboard = (props) => {
  return (
    // Main container with dark background and full viewport height
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      {/* Header section with user data and logout functionality */}
      <Header data={props.data} changeUser={props.changeUser} />
      
      {/* Task statistics/metrics display */}
      <TaskListNumbers data={props.data} />
      
      {/* Main task list display */}
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;