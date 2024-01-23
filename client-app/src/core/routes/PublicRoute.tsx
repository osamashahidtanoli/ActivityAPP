import { Outlet, Navigate } from 'react-router-dom';
import useAuth from './useAuth';

function PublicRoute() {
  const token = useAuth();
  return !token ? <Outlet /> : <Navigate to='/' />;
}

export default PublicRoute;
