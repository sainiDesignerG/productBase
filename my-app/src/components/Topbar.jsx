// src/components/Topbar.jsx
export default function Topbar() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-100">Dashboard</h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
        Logout
      </button>
    </header>
  )
}
