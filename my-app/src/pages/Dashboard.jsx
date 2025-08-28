export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-100">Products</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          + Add Product
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p className="text-2xl font-bold mt-2">120</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Active Products</h3>
          <p className="text-2xl font-bold mt-2">95</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Inactive Products</h3>
          <p className="text-2xl font-bold mt-2">25</p>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto bg-gray-800 text-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            <tr className="hover:bg-gray-700 transition">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">Electronics</td>
              <td className="px-6 py-4">$1200</td>
              <td className="px-6 py-4 flex gap-2">
                <button className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition">Edit</button>
                <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-700 transition">
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">Phone</td>
              <td className="px-6 py-4">Electronics</td>
              <td className="px-6 py-4">$800</td>
              <td className="px-6 py-4 flex gap-2">
                <button className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition">Edit</button>
                <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
              </td>
            </tr>
            {/* Add more products here */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
