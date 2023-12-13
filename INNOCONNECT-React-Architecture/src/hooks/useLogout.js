import axios from '../axios/axios';
import useAuthProvider from '../context/useAuthProvider';

const useLogout = () => {
  const { setIsLoggedIn, isLoggedIn } = useAuthProvider();
  const refreshToken = isLoggedIn?.tokens?.refresh?.token;
  const data = {
    refreshToken,
  };
  const logout = async () => {
    try {
      await axios.post('/auth/logout', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });

      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return logout;
};

export default useLogout;
