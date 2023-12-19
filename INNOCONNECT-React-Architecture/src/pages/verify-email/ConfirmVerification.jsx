import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axios/axios';
import useAuthProvider from '../../context/useAuthProvider';
import { Spinner } from '@material-tailwind/react';

const ConfirmVerification = () => {
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');
  const [loading, setLoading] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const { setIsEmailVerified } = useAuthProvider();

  useEffect(() => {
    const VerifyEmail = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `/auth/verify-email?token=${token}`,
          {}
        );
        setLoading(false);
        setSuccess(true);
        setIsEmailVerified(response?.data?.isEmailVerified);
      } catch (error) {
        setLoading(false);
        if (!error?.response) {
          setErrMsg('No Server Response');
        } else {
          setErrMsg(error?.response?.data?.message);
        }
      }
    };
    VerifyEmail();
  }, [navigate, setIsEmailVerified, token]);
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white'>
      {loading ? (
        <Spinner className='ml-2 w-12 h-12' />
      ) : success ? (
        <div className='max-w-xl px-5 text-center'>
          <h2 className='mb-2 text-[42px] font-bold text-zinc-800'>
            Thank you for verifying your email
          </h2>
          <Link
            to={'/login'}
            className='mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700'
          >
            Continue
          </Link>
        </div>
      ) : (
        <div className='max-w-xl px-5 text-center'>
          <h2 className='mb-2 text-[42px] font-bold text-zinc-800'>
            Email verification Failed
          </h2>
          <p className='mb-2 text-lg text-zinc-500'>Please Try Again</p>
        </div>
      )}
    </div>
  );
};

export default ConfirmVerification;
