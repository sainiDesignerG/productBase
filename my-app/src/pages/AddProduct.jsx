// src/pages/AddProduct.jsx
export default function AddProduct() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow space-y-6 text-white">
      <h2 className="text-2xl font-bold">Add New Product</h2>

      <form className="space-y-4">
        <div>
          <label className="block mb-1">Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <input
            type="text"
            placeholder="Enter category"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-1">Price</label>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            placeholder="Enter product description"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}
