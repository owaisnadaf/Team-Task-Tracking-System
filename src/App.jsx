import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import { getLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  // Check for logged-in user on initial render
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  /**
   * Handles user login authentication
   * @param {string} email - User's email
   * @param {string} password - User's password
   */
  const handleLogin = (email, password) => {
    // Admin login
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    // Employee login
    const { employees } = getLocalStorage(); 
    const employee = userData.find(
      (e) => email === e.email && password === e.password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      setUserData(employees);
    }
  };

  // Show login screen if no user is authenticated
  if (!user) return <Login handleLogin={handleLogin} />;

  // Render appropriate dashboard based on user role
  return (
    <>
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
      )}
    </>
  );
};

export default App;