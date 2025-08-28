// src/pages/Signup.jsx
export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-white tracking-wide">
          Create Account ✨
        </h2>
        <form className="space-y-5">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" 
          />
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-green-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}
