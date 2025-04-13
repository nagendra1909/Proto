import React, { useState } from 'react';
import { Palette, Shirt, Upload, Download, Printer } from 'lucide-react';

const Customization = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');
  
  const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Custom Design Studio</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create your unique design and get it printed on high-quality products.
          Connect with local printing partners for the best results.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Design Canvas */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <Shirt className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Your design will appear here</p>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                  Start Designing
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Design Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                <Upload className="h-5 w-5" />
                <span>Upload Image</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                <Palette className="h-5 w-5" />
                <span>Add Text</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                <Download className="h-5 w-5" />
                <span>Save Design</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                <Printer className="h-5 w-5" />
                <span>Print Preview</span>
              </button>
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Product Options</h3>
            <div className="space-y-6">
              {/* Product Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Type
                </label>
                <select className="w-full border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                  <option>T-Shirt</option>
                  <option>Hoodie</option>
                  <option>Cap</option>
                  <option>Mug</option>
                </select>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? 'border-indigo-600' : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border rounded hover:bg-gray-50"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-full border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Printing Partners</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((partner) => (
                <div
                  key={partner}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div>
                    <h4 className="font-medium">Print Studio {partner}</h4>
                    <p className="text-sm text-gray-500">2.{partner} miles away</p>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700">
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;