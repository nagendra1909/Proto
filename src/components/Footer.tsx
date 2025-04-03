import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-indigo-400" />
              <span className="font-bold text-xl text-white">SmartShop</span>
            </Link>
            <p className="mt-4">
              Revolutionizing online shopping with AI-powered features and smart recommendations.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/virtual-try-on" className="hover:text-white">Virtual Try-On</Link></li>
              <li><Link to="/store-locator" className="hover:text-white">Store Locator</Link></li>
              <li><Link to="/price-comparison" className="hover:text-white">Price Comparison</Link></li>
              <li><Link to="/customization" className="hover:text-white">Customization</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l w-full text-gray-900 focus:outline-none"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r hover:bg-indigo-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2025 SmartShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;