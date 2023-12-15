import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuthProvider from './context/useAuthProvider';
import useRefreshToken from './hooks/useRefresh';
import { Spinner } from '@material-tailwind/react';

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
       <div className='flex items-center justify-center h-screen'>
       <Spinner className='block mx-auto' />
     </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
