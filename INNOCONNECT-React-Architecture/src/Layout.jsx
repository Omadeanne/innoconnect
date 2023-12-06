import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuthProvider from './context/useAuthProvider';

const Layout = () => {
  const { isLoggedIn } = useAuthProvider();
  const location = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to='/login'
      state={{ from: location }}
      replace
    />
  );
};

export default Layout;
