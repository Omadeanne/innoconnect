import useAuthProvider from '../../context/useAuthProvider';
import axios from '../../axios/axios';
import { Spinner } from '@material-tailwind/react';
import { useState } from 'react';
import Nav from '../../Components/molecules/nav_footer/Nav';
import { Alert, Snackbar } from '@mui/material';

const snackPosition = { vertical: 'bottom', horizontal: 'right' };

const VerifyEmail = () => {
  const { isLoggedIn } = useAuthProvider();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const sendEmailVerification = async () => {
    try {
      setLoading(true);
      await axios.post(
        'auth/send-verification-email',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${isLoggedIn?.tokens?.access?.token}`,
          },
        }
      );
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setOpen(true);
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg(error?.response?.data?.message);
      }
      console.error(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Nav />
      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={snackPosition}
        open={open}
        onClose={handleClose}
        key={snackPosition.vertical + snackPosition.horizontal}
      >
        <Alert
          onClose={handleClose}
          severity='error'
          sx={{ width: '100%' }}
        >
          {errMsg}
        </Alert>
      </Snackbar>
      <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white'>
        <div className='max-w-xl px-5 text-center'>
          <h2 className='mb-2 text-[42px] font-bold text-zinc-800'>
            oops! Your account is not verified
          </h2>
          <p className='mb-2 text-lg text-zinc-500'>
            Please verify your email address to continue
          </p>
          <button
            onClick={sendEmailVerification}
            className='mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700'
          >
            {loading ? (
              success ? (
                'Sent!'
              ) : (
                <Spinner className='block mx-auto' />
              )
            ) : (
              'Send Email Verification'
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
