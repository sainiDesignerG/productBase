import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function VerifyOtp() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow numbers
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple navigation for design purposes
    navigate('/reset-password');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex">
      {/* Left Side - Verify OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify OTP</h1>
            <p className="text-gray-600">Enter the 6-digit code sent to your email</p>
          </div>

          {/* Verify OTP Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="otp">
                  Enter OTP Code
                </label>
                <div className="relative">
                  <input
                    id="otp"
                    name="otp"
                    value={otp}
                    onChange={handleOtpChange}
                    type="text"
                    className="w-full px-4 py-3 pl-12 text-center text-2xl font-mono tracking-widest border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="000000"
                    autoComplete="one-time-code"
                    maxLength={6}
                  />
                  <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Enter the 6-digit code sent to your email
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Verify OTP
              </button>
            </form>

            {/* Resend OTP */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Didn't receive the code?
              </p>
              <button className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                Resend OTP
              </button>
            </div>

            {/* Back to Forgot Password */}
            <div className="mt-4 text-center">
              <a
                href="/forgot-password"
                className="text-blue-600 hover:text-blue-500 font-medium transition-colors"
              >
                ← Change Email
              </a>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-gray-600">
            For security reasons, the OTP expires in 10 minutes. Make sure to verify it before it expires.
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://blogger.googleusercontent.com/img/a/AVvXsEhiqHrgr1UOROR0mdJAV6cMFs-1S-Ysmj5khUAZAzSp4rBRdIaBRzd6LfMk6ugxNl7DAnBrXKGmzuYJq70vDr4O263du64od0BLz2SxKldAY0w3rlx4qnWK3ky0e2kAcFRgJBTdONN6X_uB1F3R6mqf0ZMcBciFoWHcZ85Q07bA0SkxmHB9n0cNfCPkkjA=s16000"
          alt="Security Verification"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/15 to-indigo-700/25"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">Secure Verification</h3>
          <p className="text-blue-100 text-sm">Your account security is our top priority</p>
        </div>
      </div>
    </div>
  );
}
