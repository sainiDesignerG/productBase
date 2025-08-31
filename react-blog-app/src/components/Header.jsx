import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            BlogHub
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/blogs" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Blogs
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Login
            </Link>
            <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Sign Up
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-indigo-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;