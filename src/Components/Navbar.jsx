import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
              <span
                class="self-center hidden sm:block text-2xl font-semibold whitespace-nowrap dark:text-black">Project X</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Home</Link>
            <Link to="/register" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Register</Link>
            <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-100 transition duration-300">Login</Link>
            <Link to="/chat" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-100 transition duration-300">Chat</Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;