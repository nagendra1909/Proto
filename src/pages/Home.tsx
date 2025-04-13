import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Ruler, 
  Camera, 
  MessageSquare, 
  MapPin, 
  LineChart, 
  Palette,
  ArrowRight,
  Star,
  Users,
  ShoppingBag,
  User
} from 'lucide-react';

const features = [
  {
    icon: <Ruler className="h-8 w-8" />,
    title: 'Smart Sizing',
    description: 'AI-powered size recommendations with 99% accuracy',
    link: '/virtual-try-on',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: 'Virtual Mirror',
    description: 'Try clothes virtually with AR technology',
    link: '/virtual-try-on',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'AI Assistant',
    description: 'Personal stylist powered by advanced AI',
    link: '/customization',
    color: 'from-green-600 to-teal-600'
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Store Finder',
    description: 'Real-time inventory across local stores',
    link: '/store-locator',
    color: 'from-red-600 to-orange-600'
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'Price Analytics',
    description: 'Track prices and get the best deals',
    link: '/price-comparison',
    color: 'from-yellow-600 to-amber-600'
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'Custom Design',
    description: 'Create your perfect style with local artisans',
    link: '/customization',
    color: 'from-pink-600 to-rose-600'
  }
];

const stats = [
  { icon: <Users />, value: '50K+', label: 'Happy Customers' },
  { icon: <ShoppingBag />, value: '100+', label: 'Brand Partners' },
  { icon: <Star />, value: '4.9', label: 'Average Rating' }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="https://your-video-url.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight animate-fade-in">
              The Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                {' '}Shopping{' '}
              </span>
              is Here
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Experience the next generation of shopping with AI-powered recommendations,
              virtual try-ons, and seamless integration with local stores.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/virtual-try-on"
                className="group bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all flex items-center"
              >
                Try Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/store-locator"
                className="px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:bg-white/10 transition-colors"
              >
                Find Stores
              </Link>
              <Link
                to="/profile"
                className="group relative hover:bg-pink-50 transition-colors px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:bg-white/10 transition-colors"
              >
                <User className="w-16 h-6 text-gray-700 group-hover:text-pink-600 transition-colors" />
              
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center space-x-4 text-white">
                <div className="p-4 rounded-full bg-indigo-600/20">{stat.icon}</div>
                <div>
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Premium Shopping Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                to={feature.link}
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-gray-800 hover:bg-gray-700 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="text-white mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <div className="mt-4 flex items-center text-indigo-400 group-hover:text-indigo-300">
                    Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700" />
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands of smart shoppers who are already experiencing the future of retail.
            Get started today and enjoy personalized recommendations, virtual try-ons, and more.
          </p>
          <Link
            to="/virtual-try-on"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;