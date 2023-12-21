import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuthProvider from './context/useAuthProvider';

const Layout = () => {
  const { isLoggedIn, isEmailVerified } = useAuthProvider();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (!isEmailVerified) {
    return <Navigate to='/verify-email' state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default Layout;
