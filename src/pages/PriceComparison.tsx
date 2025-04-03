import React, { useState } from 'react';
import { LineChart, ShoppingBag, ArrowUpDown, Bell } from 'lucide-react';

const PriceComparison = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Classic Cotton T-Shirt',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      prices: [
        { store: 'Amazon', price: 29.99, link: '#' },
        { store: 'Flipkart', price: 27.99, link: '#' },
        { store: 'Local Store', price: 32.99, link: '#' },
      ],
      priceHistory: [
        { date: '2024-01', price: 34.99 },
        { date: '2024-02', price: 32.99 },
        { date: '2024-03', price: 29.99 },
      ],
    },
    // Add more products as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Price Comparison</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Compare prices across different platforms and track price history to get the best deals.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Product Search */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Search Products</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Search for a product..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
              
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-500">
                        From ${Math.min(...product.prices.map(p => p.price))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Price Comparison */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Current Prices</h2>
            <div className="space-y-4">
              {products[0].prices.map((price, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <ShoppingBag className="h-6 w-6 text-gray-400" />
                    <div>
                      <h3 className="font-medium">{price.store}</h3>
                      <p className="text-sm text-gray-500">Free shipping available</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">${price.price}</p>
                    <a
                      href={price.link}
                      className="text-indigo-600 hover:text-indigo-700 text-sm"
                    >
                      View Deal →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Price History</h2>
              <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
                <Bell className="h-5 w-5" />
                <span>Set Alert</span>
              </button>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Price history chart will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;