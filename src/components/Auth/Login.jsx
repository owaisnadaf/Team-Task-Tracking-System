import React, { useState } from "react";

/**
 * Login form component that takes a handleLogin callback prop.
 * Manages email/password state and submits them on form submission.
 */
const Login = ({ handleLogin }) => {
  // State for form inputs
  const [email, setEmail] = useState("");        // Stores user's email input
  const [password, setPassword] = useState("");  // Stores user's password input

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();             // Prevent default form submission
    handleLogin(email, password);  // Pass credentials to parent component
    setEmail("");                  // Clear email field
    setPassword("");               // Clear password field
  };
  
  return (
    // Main container - centers the form vertically and horizontally
    <div className="flex h-screen w-screen items-center justify-center">
      {/* Form container with red border */}
      <div className="border-2 rounded-xl border-red-400 p-15">
        {/* Login form */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          {/* Email input field */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none bg-transparent border-2 font-medium text-lg border-red-400 text-xl py-2 px-6 rounded-full placeholder:text-gray-500"
            type="text"
            placeholder="Enter your email"
          />
          
          {/* Password input field */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none bg-transparent border-2 font-medium text-lg border-red-400 text-xl py-2 px-6 mt-4 rounded-full placeholder:text-gray-500"
            type="password"
            placeholder="Enter password"
          />
          
          {/* Submit button */}
          <button
            className="mt-7 border-none outline-none font-semibold bg-red-400 hover:bg-red-500 text-2xl py-3 w-full px-8 rounded-full text-black"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;