import React from 'react';
import { 
  User, Settings, ShoppingBag, Heart, Clock, LogOut, 
  MapPin, CreditCard, Bell, Shield, Gift, Truck,
  Phone, Mail, Globe, Calendar, Camera, Upload
} from 'lucide-react';

const Profile = () => {
  const userInfo = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" // Placeholder avatar
  };

  const menuItems = [
    { icon: <User size={20} />, label: 'Personal Info', link: '#' },
    { icon: <ShoppingBag size={20} />, label: 'My Orders', link: '#' },
    { icon: <Heart size={20} />, label: 'Wishlist', link: '#' },
    { icon: <Clock size={20} />, label: 'Recently Viewed', link: '#' },
    { icon: <Settings size={20} />, label: 'Settings', link: '#' },
    { icon: <LogOut size={20} />, label: 'Logout', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img 
                    src={userInfo.avatar} 
                    alt="Profile" 
                    className="w-24 h-24 rounded-full border-4 border-pink-100"
                  />
                  <div className="absolute bottom-0 right-0 bg-green-400 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-800">{userInfo.name}</h2>
                <p className="text-gray-500 text-sm">{userInfo.email}</p>
              </div>
              
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Enhanced Main Content Area */}
          <div className="md:col-span-3 space-y-6">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img 
                    src={userInfo.avatar} 
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-pink-100" 
                  />
                  <button className="absolute bottom-0 right-0 p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">
                    <Camera size={16} />
                  </button>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{userInfo.name}</h1>
                  <p className="text-gray-500">Premium Member since 2024</p>
                  <div className="mt-4 flex space-x-3">
                    <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                      Edit Profile
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      View Public Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-200 focus:border-pink-400 outline-none transition-all"
                    defaultValue={userInfo.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-200 focus:border-pink-400 outline-none transition-all"
                    defaultValue={userInfo.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-200 focus:border-pink-400 outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-200 focus:border-pink-400 outline-none transition-all"
                    placeholder="City, Country"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input type="date" className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select className="form-input">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select className="form-input">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                  <select className="form-input">
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC-8 (Pacific Time)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Address Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  <input type="text" className="form-input" placeholder="123 Main St" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Apartment/Unit</label>
                  <input type="text" className="form-input" placeholder="Apt #" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input type="text" className="form-input" placeholder="City" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
                  <input type="text" className="form-input" placeholder="State" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                  <input type="text" className="form-input" placeholder="Postal Code" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select className="form-input">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800">Email Notifications</h4>
                    <p className="text-sm text-gray-500">Receive updates about your orders and account</p>
                  </div>
                  <div className="form-switch">
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800">SMS Notifications</h4>
                    <p className="text-sm text-gray-500">Get order updates via text message</p>
                  </div>
                  <div className="form-switch">
                    <input type="checkbox" className="toggle" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800">Marketing Preferences</h4>
                    <p className="text-sm text-gray-500">Receive personalized offers and updates</p>
                  </div>
                  <div className="form-switch">
                    <input type="checkbox" className="toggle" />
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Security Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="form-input"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="form-input"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="pt-6 border-t">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-800">Enable 2FA</h4>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <div className="form-switch">
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Changes Button */}
            <div className="flex justify-end">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                Save All Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;