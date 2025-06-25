import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

/**
 * Authentication provider component
 * Manages user data state and provides it to child components
 * Initializes local storage if empty
 */
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Initialize local storage and user data
  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;