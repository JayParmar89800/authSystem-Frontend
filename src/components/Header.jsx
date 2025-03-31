import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-blue-600">Auth System</h1>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link
              to="/customer-registration"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Customer Registration
            </Link>
            <Link
              to="/admin-registration"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Admin Registration
            </Link>
            <Link
              to="/login"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
