import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-900">
        <Topbar />
        
        {/* Nested route content */}
        <section className="mt-6">
          <Outlet />
        </section>
      </main>
    </div>
  )
}
