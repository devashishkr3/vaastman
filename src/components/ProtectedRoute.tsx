import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRole: 'admin' | 'employee';
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRole }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated || role !== allowedRole) {
    return <Navigate to={allowedRole === 'ADMIN' ? '/admin/login' : '/employee/login'} replace />;
  }

  return <>{children}</>;
};
