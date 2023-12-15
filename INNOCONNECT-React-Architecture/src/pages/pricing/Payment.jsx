import { useParams } from 'react-router-dom';
import useAuthProvider from '../../context/useAuthProvider';
import axios from '../../axios/axios';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';
import { useState } from 'react';
import { Spinner } from '@material-tailwind/react';

const Payment = () => {
  const { id } = useParams();

  const { isLoggedIn } = useAuthProvider();
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoggedIn);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `/subscription/${id}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        }
      );

      console.log(response.data);
      const data = {
        reference: response.data.data.reference,
        planId: id,
      };

      localStorage.setItem('data', JSON.stringify(data));
      setIsLoading(false);
      window.location.replace(response.data.data.authorization_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Nav />
      <hr />
      <div className='flex justify-center items-center h-screen'>
        <button
          onClick={handlePayment}
          className='bg-blue-500 text-white px-4 py-2'
        >
          {isLoading ? <Spinner className='block mx-auto' /> : 'Pay Now'}
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
