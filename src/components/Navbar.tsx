import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  MessageSquare, 
  User, 
  Settings, 
  LogOut, 
  Bell,
  Heart,
  Ruler,
  Camera,
  MapPin,
  LineChart,
  Palette,
  ShoppingCart
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const userRole = 'admin'; // Replace with actual authentication
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
  };

  const mainFeatures = [
    { icon: <Camera size={20} />, label: 'Virtual Try-On', link: '/virtual-try-on' },
    { icon: <Ruler size={20} />, label: 'Smart Sizing', link: '/smart-sizing' },
    { icon: <MapPin size={20} />, label: 'Store Locator', link: '/store-locator' },
    { icon: <LineChart size={20} />, label: 'Price Analytics', link: '/price-comparison' },
    { icon: <Palette size={20} />, label: 'Custom Design', link: '/customization' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <ShoppingBag className="h-9 w-9 text-pink-600" />
              <span className="font-bold text-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
                SmartShop
              </span>
            </Link>
          </div>

          {/* Main Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-4">
              {mainFeatures.map((feature) => (
                <Link
                  key={feature.link}
                  to={feature.link}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all duration-200"
                >
                  {feature.icon}
                  <span className="text-sm font-medium">{feature.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="hidden md:block relative group">
              <input
                type="text"
                placeholder="Search products..."
                className="w-72 px-5 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-200 group-hover:border-pink-200 transition-all"
              />
              <Search className="absolute right-4 top-3 h-5 w-5 text-gray-400 group-hover:text-pink-500" />
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-5">
              {/* Action Buttons */}
              <button className="p-2.5 hover:bg-pink-50 rounded-full relative group">
                <Heart className="h-6 w-6 text-gray-600 group-hover:text-pink-600 transition-colors" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                  2
                </span>
              </button>

              <button className="p-2.5 hover:bg-pink-50 rounded-full relative group">
                <ShoppingCart className="h-6 w-6 text-gray-600 group-hover:text-pink-600 transition-colors" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                  3
                </span>
              </button>

              <button className="p-2.5 hover:bg-pink-50 rounded-full relative group">
                <Bell className="h-6 w-6 text-gray-600 group-hover:text-pink-600 transition-colors" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                  5
                </span>
              </button>

              {/* AI Assistant */}
              <button
                onClick={() => setShowChatbot(!showChatbot)}
                className="p-2.5 hover:bg-pink-50 rounded-full group"
              >
                <MessageSquare className="h-6 w-6 text-gray-600 group-hover:text-pink-600 transition-colors" />
              </button>

              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 p-1.5 hover:bg-pink-50 rounded-full transition-all group"
                >
                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="w-9 h-9 rounded-full border-2 border-pink-200 group-hover:border-pink-400 transition-colors"
                  />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transform opacity-100 scale-100 transition-all">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                      {userRole === 'admin' && (
                        <span className="mt-1 inline-block px-2 py-0.5 text-xs bg-pink-100 text-pink-600 rounded-full">
                          Admin
                        </span>
                      )}
                    </div>
                    
                    <div className="py-2">
                      <Link to="/profile" className="profile-menu-item">
                        <User size={18} />
                        <span>Profile</span>
                      </Link>
                      <Link to="/orders" className="profile-menu-item">
                        <ShoppingBag size={18} />
                        <span>My Orders</span>
                      </Link>
                      <Link to="/wishlist" className="profile-menu-item">
                        <Heart size={18} />
                        <span>Wishlist</span>
                      </Link>
                      <Link to="/settings" className="profile-menu-item">
                        <Settings size={18} />
                        <span>Settings</span>
                      </Link>
                      {userRole === 'admin' && (
                        <Link to="/dashboard" className="profile-menu-item">
                          <LineChart size={18} />
                          <span>Dashboard</span>
                        </Link>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-100 pt-2">
                      <button className="profile-menu-item text-red-600 hover:bg-red-50">
                        <LogOut size={18} />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 hover:bg-pink-50 rounded-lg ml-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <div className="px-4 py-2 space-y-1">
            {mainFeatures.map((feature) => (
              <Link
                key={feature.link}
                to={feature.link}
                className="flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                onClick={() => setIsOpen(false)}
              >
                {feature.icon}
                <span>{feature.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Chatbot */}
      {showChatbot && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">AI Shopping Assistant</h3>
            <button
              onClick={() => setShowChatbot(false)}
              className="p-1 hover:bg-pink-50 rounded"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-72 overflow-y-auto border-t border-b mb-4">
            {/* Chat messages would go here */}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-r hover:opacity-90">
              Send
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;