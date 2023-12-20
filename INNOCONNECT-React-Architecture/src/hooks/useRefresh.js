import axios from '../axios/axios';
import useAuthProvider from '../context/useAuthProvider';

const useRefreshToken = () => {
  const { isLoggedIn, setIsLoggedIn, setIsEmailVerified, isEmailVerified } = useAuthProvider();

  const refresh = async () => {
    if (isLoggedIn) {
      return;
    }

    const existingData = localStorage.getItem('isLoggedIn');
    if (existingData) {
      const storedData = JSON.parse(existingData);
      setIsLoggedIn(storedData);
      setIsEmailVerified(storedData?.user?.isEmailVerified);

      try {
        const response = await axios.post(
          '/auth/refresh-tokens',
          { refreshToken: storedData.tokens.refresh.token },
          { headers: { 'Content-Type': 'application/json' } }
        );

        const updatedData = {
          ...storedData,
          tokens: response?.data,
        };

        localStorage.setItem('isLoggedIn', JSON.stringify(updatedData));
        setIsLoggedIn(updatedData);
        setIsEmailVerified(updatedData?.user?.isEmailVerified);
        return response?.data?.access?.token;
      } catch (error) {
        console.error(error);
      }
    }
  };

  return refresh;
};

export default useRefreshToken;
