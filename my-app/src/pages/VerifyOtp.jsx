export default function VerifyOtp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-2xl font-extrabold text-center mb-6 text-white">
          Verify OTP 🔐
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          Enter the 6-digit code we sent to your email.
        </p>
        <form className="space-y-5">
          <div className="flex justify-between gap-2">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-lg font-bold bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Verify
          </button>
        </form>
        <p className="text-sm text-center text-gray-400 mt-6">
          Didn’t receive code?{" "}
          <a href="#" className="text-yellow-400 hover:underline">
            Resend
          </a>
        </p>
      </div>
    </div>
  )
}
