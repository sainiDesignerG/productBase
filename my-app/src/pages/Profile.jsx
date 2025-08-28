// src/pages/Profile.jsx
export default function Profile() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow space-y-6 text-white max-w-3xl">
      <h2 className="text-2xl font-bold">My Profile</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 text-xl font-bold">
            A
          </div>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
            Change Avatar
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              defaultValue="Alice Johnson"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              defaultValue="alice@example.com"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1">Phone</label>
            <input
              type="text"
              defaultValue="+1 234 567 890"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
