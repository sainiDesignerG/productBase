// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-700 text-white flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-8">My Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-purple-400" : ""}>
          Products
        </NavLink>
        <NavLink to="/dashboard/add" className={({ isActive }) => isActive ? "text-purple-400" : ""}>
          Add Product
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "text-purple-400" : ""}>
          Profile
        </NavLink>
        <NavLink to="#" className="hover:text-purple-400">
          Settings
        </NavLink>
      </nav>
    </aside>
  )
}
