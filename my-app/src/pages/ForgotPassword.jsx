export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-2xl font-extrabold text-center mb-6 text-white">
          Forgot Password 🔑
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          Enter your email and we’ll send you reset instructions.
        </p>
        <form className="space-y-5">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500" 
          />
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-pink-600 to-red-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-sm text-center text-gray-400 mt-6">
          Remember your password?{" "}
          <a href="/login" className="text-pink-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}
