import React, { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "iPhone 15", price: 120000, category: "Electronics", status: "Active", image: "📱" },
    { id: 2, name: "MacBook Pro", price: 250000, category: "Electronics", status: "Active", image: "💻" },
    { id: 3, name: "AirPods Pro", price: 25000, category: "Electronics", status: "Active", image: "🎧" },
    { id: 4, name: "Nike Air Max", price: 15000, category: "Fashion", status: "Active", image: "👟" },
    { id: 5, name: "Samsung TV", price: 80000, category: "Electronics", status: "Inactive", image: "📺" },
    { id: 6, name: "Sony Headphones", price: 30000, category: "Electronics", status: "Active", image: "🎧" },
    { id: 7, name: "Dell Laptop", price: 75000, category: "Electronics", status: "Active", image: "💻" },
    { id: 8, name: "Adidas Shoes", price: 12000, category: "Fashion", status: "Active", image: "👟" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(products.map(product => product.category))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-1">Manage your product inventory</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-sm">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Product
        </button>
      </div>


      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-4 mx-auto">
                <span className="text-2xl">{product.image}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{product.name}</h3>
              <p className="text-gray-600 text-center text-sm mb-3">₹{product.price.toLocaleString()}</p>
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  product.category === 'Electronics' ? 'bg-blue-100 text-blue-800' :
                  product.category === 'Fashion' ? 'bg-purple-100 text-purple-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {product.category}
                </span>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.status}
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
                  View
                </button>
                <button className="flex-1 px-3 py-2 text-sm font-medium text-yellow-600 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors">
                  Edit
                </button>
                <button className="flex-1 px-3 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02] shadow-sm">
            Add New Product
          </button>
        </div>
      )}

    </div>
  );
}