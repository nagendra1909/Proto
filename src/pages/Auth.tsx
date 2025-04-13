import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  LogIn, 
  UserPlus,
  ShoppingBag
} from 'lucide-react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  User
} from 'firebase/auth';
import { auth } from '../firebase';
import { createUserProfile } from '../services/userService';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const createProfile = async (user: User) => {
    try {
      await createUserProfile(user.uid, {
        uid: user.uid,
        name: name || user.displayName || email.split('@')[0],
        email: user.email || '',
        avatar: user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`,
        preferences: {
          emailNotifications: true,
          smsNotifications: false,
          marketingPreferences: false
        },
        security: {
          twoFactorAuth: false
        }
      });
      return true;
    } catch (error: any) {
      console.error('Profile creation error:', error);
      return false;
    }
  };

  const redirectAfterAuth = () => {
    const from = (location.state as any)?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        if (!email || !password) {
          throw new Error('Email and password are required');
        }
        // Create Firebase auth user
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        
        // Create user profile in Firestore
        const profileCreated = await createProfile(user);
        if (!profileCreated) {
          return; // Don't redirect if profile creation failed
        }
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      // Only redirect if everything succeeded
      redirectAfterAuth();
    } catch (err: any) {
      console.error('Auth error:', err);
      const errorMessage = err.message.replace('Firebase: ', '').replace('Error (auth/', '').replace(')', '');
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      
      // Attempt to create profile but don't block redirection
      try {
        await createProfile(user);
      } catch (profileError) {
        console.error('Profile creation error:', profileError);
      }

      // Redirect regardless of profile creation success
      redirectAfterAuth();
    } catch (err: any) {
      console.error('Google sign-in error:', err);
      const errorMessage = err.message.replace('Firebase: ', '').replace('Error (auth/', '').replace(')', '');
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-md w-full space-y-8 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
        <div className="text-center">
          <div className="flex justify-center">
            <ShoppingBag className="h-12 w-12 text-pink-600" />
          </div>
          <h2 className="mt-4 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
            {isSignUp ? 'Join SmartShop' : 'Welcome Back'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isSignUp 
              ? 'Create an account to start your shopping journey' 
              : 'Sign in to continue your shopping experience'}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleAuth}>
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm border border-red-100">
              {error}
            </div>
          )}

          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                placeholder="you@example.com"
                required
              />
              <Mail className="h-5 w-5 text-gray-400 absolute right-3 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                placeholder="••••••••"
                required
              />
              <Lock className="h-5 w-5 text-gray-400 absolute right-3 top-3.5" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isSignUp ? (
                <span className="flex items-center">
                  <UserPlus className="w-5 h-5 mr-2" />
                  Create Account
                </span>
              ) : (
                <span className="flex items-center">
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </span>
              )}
            </button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex justify-center items-center py-3 px-4 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
        >
          <img 
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-pink-600 hover:text-pink-700 transition-colors"
          >
            {isSignUp
              ? 'Already have an account? Sign in'
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
