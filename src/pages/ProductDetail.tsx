import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Ruler, Camera } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-143438967766${i}-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80`}
                  alt={`Product view ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Classic Cotton T-Shirt</h1>
            <p className="text-gray-500">Product ID: {id}</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">$29.99</span>
            <span className="text-green-600">In Stock</span>
          </div>

          {/* Size Recommendation */}
          <div className="bg-indigo-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-indigo-600 mb-2">
              <Ruler className="h-5 w-5" />
              <h3 className="font-semibold">Smart Size Recommendation</h3>
            </div>
            <p className="text-indigo-900">Based on your profile: Size M (Medium)</p>
          </div>

          {/* Virtual Try-On */}
          <div className="bg-indigo-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-indigo-600 mb-2">
              <Camera className="h-5 w-5" />
              <h3 className="font-semibold">Virtual Try-On</h3>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Try It On
            </button>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700">
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
                <Heart className="h-5 w-5" />
                <span>Save</span>
              </button>
              <button className="flex items-center justify-center space-x-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Product Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li>100% Premium Cotton</li>
              <li>Regular Fit</li>
              <li>Machine Washable</li>
              <li>Available in Multiple Colors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;