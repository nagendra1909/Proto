import React, { useState } from 'react';
import { Camera, Upload, Undo2 } from 'lucide-react';

const VirtualTryOn = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Virtual Try-On Experience</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how clothes look on you before you buy. Upload your photo or use your camera
          to try on items virtually.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Try-On View */}
        <div className="space-y-6">
          <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Your virtual fitting room</p>
              <div className="mt-4 space-x-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  Use Camera
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                  Upload Photo
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Undo2 className="h-5 w-5" />
              <span>Reset</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Upload className="h-5 w-5" />
              <span>Save Look</span>
            </button>
          </div>
        </div>

        {/* Product Selection */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Select an Item to Try On</h3>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="cursor-pointer group"
                  onClick={() => setSelectedProduct(item)}
                >
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2">
                    <img
                      src={`https://images.unsplash.com/photo-15${item}434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80`}
                      alt={`Product ${item}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-sm font-medium">Classic T-Shirt</p>
                  <p className="text-sm text-gray-500">$29.99</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Recommended for You</h3>
            <div className="grid grid-cols-2 gap-4">
              {[5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="cursor-pointer group"
                  onClick={() => setSelectedProduct(item)}
                >
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2">
                    <img
                      src={`https://images.unsplash.com/photo-15${item}434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80`}
                      alt={`Product ${item}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-sm font-medium">Casual Jacket</p>
                  <p className="text-sm text-gray-500">$89.99</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;