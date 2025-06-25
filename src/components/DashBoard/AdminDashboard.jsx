import React, { useContext } from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import { AuthContext } from '../../context/AuthProvider';

/**
 * Admin Dashboard Component
 * 
 * Main dashboard layout for admin users containing:
 * - Header with user info
 * - Task creation interface
 * - Task display/list section
 * 
 * @param {Object} props - Component props
 * @param {Function} props.changeUser - Function to handle user change/logout
 */
const AdminDashboard = (props) => {
  // Access authentication context data
  const data = useContext(AuthContext);
  
  return (
    // Main container with full viewport height and padding
    <div className="h-screen w-full p-7">
      {/* Header section with user data and changeUser function */}
      <Header data={data} changeUser={props.changeUser} />
      
      {/* Component for creating new tasks */}
      <CreateTask />
      
      {/* Component for displaying all tasks */}
      <AllTask />
    </div>
  );
};

export default AdminDashboard;