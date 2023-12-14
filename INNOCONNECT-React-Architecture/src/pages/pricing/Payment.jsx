import { useParams } from 'react-router-dom';
import useAuthProvider from '../../context/useAuthProvider';
import axios from '../../axios/axios';

const Payment = () => {
  const { id } = useParams();

  const { isLoggedIn } = useAuthProvider();

  console.log(isLoggedIn);

  const handlePayment = async () => {
    try {
      const response = await axios.post(`/subscription/${id}`, {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
        },
      });

      console.log(response.data);
      const data = {
        reference: response.data.data.reference,
        planId: id
      }

      localStorage.setItem('data', JSON.stringify(data));
      window.location.replace(response.data.data.authorization_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <button onClick={handlePayment} className='bg-blue-500 text-white px-4 py-2'>Pay</button>
    </div>
  );
};

export default Payment;
