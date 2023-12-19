import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axios/axios';
import { Snackbar } from '@mui/base';
import { Alert } from '@material-tailwind/react';
import useAuthProvider from '../../context/useAuthProvider';

const snackPosition = { vertical: 'bottom', horizontal: 'right' };

const ConfirmVerification = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthProvider();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const VerifyEmail = async () => {
      try {
        setLoading(true);
        const res = await axios.post(`/auth/verify-email?token=${token}`, {});
        localStorage.setItem('isLoggedIn', JSON.stringify(res?.data));
        setIsLoggedIn(res.data);
        setLoading(false);
        navigate('/login');
      } catch (error) {
        setLoading(false);
        setOpen(true);
        if (!error?.response) {
          setErrMsg('No Server Response');
        } else {
          setErrMsg(error?.response?.data?.message);
        }
      }
    };
    VerifyEmail();
  }, [navigate, setIsLoggedIn, token]);

  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white'>
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
      {loading ? (
        <div className='flex flex-col items-center justify-center'>
          <div
            className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full'
            role='status'
          >
            <span className='visually-hidden'>Verifying...</span>
          </div>
        </div>
      ) : (
        <h1 className='text-3xl font-bold'>Email Verified</h1>
      )}
    </div>
  );
};

export default ConfirmVerification;
