import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuthProvider from './context/useAuthProvider';
import useRefreshToken from './hooks/useRefresh';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refreshToken = useRefreshToken();
  const { isLoggedIn } = useAuthProvider();

  useEffect(() => {

    const verifyRefreshToken = async () => {
      try {
        await refreshToken();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };


    if (!isLoggedIn?.tokens?.access?.token) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }
  }, [isLoggedIn, refreshToken]);

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-screen w-full'>
          Loading...
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
