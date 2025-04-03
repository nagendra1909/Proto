import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stores = [
    {
      id: 1,
      name: 'Downtown Fashion Hub',
      address: '123 Main St, New York, NY 10001',
      phone: '(212) 555-0123',
      hours: '9:00 AM - 9:00 PM',
      distance: '0.8 miles',
    },
    {
      id: 2,
      name: 'Brooklyn Style Center',
      address: '456 Atlantic Ave, Brooklyn, NY 11217',
      phone: '(718) 555-0124',
      hours: '10:00 AM - 8:00 PM',
      distance: '2.3 miles',
    },
    {
      id: 3,
      name: 'Queens Fashion Mall',
      address: '789 Queens Blvd, Queens, NY 11375',
      phone: '(718) 555-0125',
      hours: '10:00 AM - 9:30 PM',
      distance: '4.1 miles',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find a Store Near You</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Locate our stores, check product availability, and get directions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Search and Store List */}
        <div className="md:col-span-1 space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
            <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            {stores.map((store) => (
              <div
                key={store.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold mb-2">{store.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <span>{store.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>{store.hours}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-indigo-600">{store.distance}</span>
                    <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-700">
                      <Navigation className="h-4 w-4" />
                      <span>Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map View */}
        <div className="md:col-span-2">
          <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Map view will be integrated here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;