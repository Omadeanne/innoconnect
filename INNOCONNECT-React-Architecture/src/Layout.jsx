import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const user = true;
  const location = useLocation();
  return user ? (
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
