import React from "react";
import { setLocalStorage } from '../../utils/localStorage';

/**
 * Header component displaying user greeting and logout button
 * @param {Object} props - Component props
 * @param {Object} props.data - User data containing name
 * @param {Function} props.changeUser - Function to handle user logout
 */
const Header = ({ data, changeUser }) => {
  /**
   * Handles user logout by clearing local storage and updating app state
   */
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      {/* User greeting */}
      <div>
        <h1 className="text-2xl font-medium">Hello</h1>
        <span className="text-3xl font-semibold">{data.name}</span>
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm hover:bg-red-700 transition-colors"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;