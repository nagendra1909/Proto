import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import GoogleMapReact from 'google-map-react';
import mallsData from '../../malls.json';

// Update your Store interface
interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  position: {
    lat: number;
    lng: number;
  };
}

const StoreLocator = () => {
  const [hoveredStore, setHoveredStore] = useState<Store | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [stores, setStores] = useState<Store[]>([]);
  const mapRef = useRef<GoogleMapType | null>(null);
  const defaultCenter = {
    lat: 17.3850,
    lng: 78.4867
  };
  

  // Update fetchStores to use local JSON data
  const fetchStores = async (query: string = '') => {
    try {
      // Check if mallsData exists and has the malls property
      if (!mallsData || !mallsData.malls) {
        console.error('Invalid malls data:', mallsData);
        return;
      }
  
      if (query) {
        const filteredMalls = mallsData.malls.filter(mall => 
          mall.name?.toLowerCase().includes(query.toLowerCase()) ||
          mall.address?.toLowerCase().includes(query.toLowerCase())
        );
        
        console.log('Filtered malls:', filteredMalls); // Debug log
        setStores(filteredMalls.length > 0 ? filteredMalls : mallsData.malls);
      } else {
        console.log('Setting all malls:', mallsData.malls); // Debug log
        setStores(mallsData.malls);
      }
    } catch (error) {
      console.error('Error in fetchStores:', error);
      setStores([]);
    }
  };
  // Use useEffect to load stores when component mounts
  useEffect(() => {
    fetchStores();
  }, []);

  interface GoogleMapType {
    panTo: (position: { lat: number; lng: number }) => void;
    setZoom: (zoom: number) => void;
  }
  interface BootstrapURLKeys {
    key?: string;
    language?: string;
    region?: string;
    libraries?: string[];
  }
  interface MarkerProps {
    lat: number;
    lng: number;
    selected: boolean;
  }
  interface GoogleMapsType {
    Map: typeof google.maps.Map;
    Marker: typeof google.maps.Marker;
  }
  const handleStoreClick = (store: Store) => {
    setSelectedStore(store);
    if (mapRef.current) {
      mapRef.current.panTo(store.position);
      mapRef.current.setZoom(14);
    }
  };
  
  // 💚 Add handleApiLoaded function
  const handleApiLoaded = ({ map }: { map: GoogleMapType }) => {
    mapRef.current = map;
  };
  
  // 💚 Add handleSearch function
  const handleSearch = () => {
    fetchStores(searchQuery);
  };
  const Marker = ({ selected, lat, lng }: MarkerProps) => (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer"
      style={{ 
        zIndex: selected ? 2 : 1,
        pointerEvents: 'auto',
        // Add scale transform
        transform: `scale(${selected ? 1.5 : 1.2}) translate(-50%, -100%)`
      }}
    >
      <MapPin 
        // Increase base size of marker
        size={selected ? 48 : 36}
        className={`${
          selected ? 'text-indigo-600' : 'text-gray-600'
        } transition-all duration-200`}
        fill={selected ? '#4F46E5' : 'white'}
        stroke={selected ? '#4F46E5' : 'currentColor'}
        strokeWidth={2}
      />
    </div>
  );

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
  placeholder="Search by mall name..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
  className="w-full px-4 py-2 pr-24 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
/>
            <button
              onClick={handleSearch}
              className="absolute right-2 top-2 px-4 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Search
            </button>
          </div>

          {/* Store List */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scroll-smooth"style={{padding:'10px'}}>

          {stores.map((store) => (
  <div
    key={store.id}
    className={`bg-white p-4 rounded-lg shadow-md transition-all duration-200 cursor-pointer hover:shadow-lg ${
      (selectedStore?.id === store.id || hoveredStore?.id === store.id) 
        ? 'ring-2 ring-indigo-600' 
        : ''
    }`}
    onClick={() => handleStoreClick(store)}
    onMouseEnter={() => {
      setHoveredStore(store);
      if (mapRef.current) {
        mapRef.current.panTo(store.position);
      }
    }}
    onMouseLeave={() => setHoveredStore(null)}
  >
    <h3 className="font-semibold text-lg mb-2">{store.name}</h3>
    <div className="space-y-2 text-sm text-gray-600">
      <div className="flex items-start space-x-2">
        <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
        <span className="flex-1">{store.address}</span>
      </div>
      {store.phone && (
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
          <span>{store.phone}</span>
        </div>
      )}
      {store.hours && (
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
          <span>{store.hours}</span>
        </div>
      )}
      <div className="flex items-center justify-end mt-4">
        <button 
          className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-700"
          onClick={(e) => {
            e.stopPropagation();
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${store.position.lat},${store.position.lng}`);
          }}
        >
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
{/* Map View */}
<div className="md:col-span-2 h-[600px] relative">
<GoogleMapReact
  bootstrapURLKeys={{}} // Simplified version without type assertion
  defaultCenter={defaultCenter}
  center={selectedStore?.position || defaultCenter}
  defaultZoom={12}
  zoom={selectedStore ? 15 : 12}
  onGoogleApiLoaded={({ map }) => {
    mapRef.current = map;
    if (stores.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      stores.forEach(store => {
        bounds.extend(new window.google.maps.LatLng(store.position.lat, store.position.lng));
      });
      map.fitBounds(bounds);
    }
  }}
  yesIWantToUseGoogleMapApiInternals
>
  {stores.map((store) => (
    <Marker
      key={store.id}
      lat={store.position.lat}
      lng={store.position.lng}
      selected={selectedStore?.id === store.id || hoveredStore?.id === store.id}
    />
  ))}
</GoogleMapReact>
</div>
      </div>
    </div>
  );
};

export default StoreLocator;