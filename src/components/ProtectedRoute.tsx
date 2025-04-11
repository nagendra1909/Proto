import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Show loading spinner while auth state is being determined
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
      </div>
    );
  }

  // Redirect to auth page if not authenticated, preserving the intended destination
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Render children only when authenticated
  return <>{children}</>;
};

export default ProtectedRoute;