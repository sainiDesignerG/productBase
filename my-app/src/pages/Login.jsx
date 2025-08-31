import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Something went wrong');
    }
  };
  return (
    <div className="min-h-screen flex" style={{ background: 'var(--gradient-primary)' }}>
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your ProductHub account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white py-3 px-4 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              style={{
                background: 'var(--gradient-button)',
                transition: 'var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--gradient-button-hover)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--gradient-button)';
              }}
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-4 text-center">
              <a
                href="/signup"
                className="text-blue-600 hover:text-blue-500 font-medium transition-colors"
              >
                Create new account
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-white">
          By signing in, you agree to our{' '}
          <a href="#" className="font-medium text-white hover:text-blue-200 underline">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="font-medium text-white hover:text-blue-200 underline">Privacy Policy</a>
        </p>
        </div>
      </div>

      {/* Right Side - Fitness Girl Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        {/* Custom Image */}
        <img
          src="https://blogger.googleusercontent.com/img/a/AVvXsEhiqHrgr1UOROR0mdJAV6cMFs-1S-Ysmj5khUAZAzSp4rBRdIaBRzd6LfMk6ugxNl7DAnBrXKGmzuYJq70vDr4O263du64od0BLz2SxKldAY0w3rlx4qnWK3ky0e2kAcFRgJBTdONN6X_uB1F3R6mqf0ZMcBciFoWHcZ85Q07bA0SkxmHB9n0cNfCPkkjA=s16000"
          alt="Product Management"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            // Fallback if image fails to load
            e.target.src = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-indigo-700/40"></div>

        {/* Optional Text Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">Welcome to ProductHub</h3>
          <p className="text-gray-200 text-sm">Manage your products with ease and efficiency</p>
        </div>
      </div>
    </div>
  );
}