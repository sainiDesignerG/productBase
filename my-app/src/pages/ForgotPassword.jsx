import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple navigation for design purposes
    navigate('/verify-otp');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex">
      {/* Left Side - Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password</h1>
            <p className="text-gray-600">Enter your email to receive a password reset OTP</p>
          </div>

          {/* Forgot Password Form */}
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
                    type="email"
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your email address"
                    autoComplete="email"
                  />
                  <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Send Reset OTP
              </button>
            </form>

            {/* Back to Login */}
            <div className="mt-6 text-center">
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-500 font-medium transition-colors"
              >
                ← Back to Login
              </a>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Need help? Contact our{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500 underline">Support Team</a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://blogger.googleusercontent.com/img/a/AVvXsEhiqHrgr1UOROR0mdJAV6cMFs-1S-Ysmj5khUAZAzSp4rBRdIaBRzd6LfMk6ugxNl7DAnBrXKGmzuYJq70vDr4O263du64od0BLz2SxKldAY0w3rlx4qnWK3ky0e2kAcFRgJBTdONN6X_uB1F3R6mqf0ZMcBciFoWHcZ85Q07bA0SkxmHB9n0cNfCPkkjA=s16000"
          alt="Security & Privacy"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/15 to-indigo-700/25"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">Secure & Protected</h3>
          <p className="text-blue-100 text-sm">Your account security is our top priority</p>
        </div>
      </div>
    </div>
  );
}
