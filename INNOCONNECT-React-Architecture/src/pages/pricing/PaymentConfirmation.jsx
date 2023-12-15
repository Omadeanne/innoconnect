import { useEffect, useState } from 'react';
import useAuthProvider from '../../context/useAuthProvider';
import axios from '../../axios/axios';
import { Link } from 'react-router-dom';
import Nav from '../../Components/molecules/nav_footer/Nav';
import Footer from '../../Components/molecules/nav_footer/Footer';

const PaymentConfirmation = () => {
  const { isLoggedIn } = useAuthProvider();
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  console.log(isLoggedIn);
  useEffect(() => {
    const confirmPayment = async () => {
      const data = JSON.parse(localStorage.getItem('data'));
      console.log(data);
      const { reference, planId } = data;
      try {
        const response = await axios.get(
          `/subscription/${reference}/${planId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
            },
          }
        );
        setIsLoading(false);
        setSuccess(true);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        localStorage.removeItem('data');
      }
    };
    confirmPayment();
  }, [isLoggedIn]);
  return (
    <>
      <Nav />
      <div className='flex justify-center items-center h-screen flex-col'>
        {isLoading ? (
          'confirming payment...'
        ) : success ? (
          <>
            <p>Payment Successful</p>
            <Link
              to='/'
              className='text-blue-500 mt-2 block'
            >
              Home
            </Link>
          </>
        ) : (
          'Payment Failed'
        )}
      </div>
      <Footer />
    </>
  );
};

export default PaymentConfirmation;
