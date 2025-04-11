import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import VirtualTryOn from './pages/VirtualTryOn';
import StoreLocator from './pages/StoreLocator';
import PriceComparison from './pages/PriceComparison';
import Customization from './pages/Customization';
import Profile from './pages/Profile';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <main className="flex-grow">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/virtual-try-on" element={<VirtualTryOn />} />
                        <Route path="/store-locator" element={<StoreLocator />} />
                        <Route path="/price-comparison" element={<PriceComparison />} />
                        <Route path="/customization" element={<Customization />} />
                        <Route path="/profile" element={<Profile />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;