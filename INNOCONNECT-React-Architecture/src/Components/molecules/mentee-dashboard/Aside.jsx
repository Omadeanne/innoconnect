import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Alert,
} from '@material-tailwind/react';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import AsideButton from './AsideButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthProvider from '../../../context/useAuthProvider';
import useLogout from '../../../hooks/useLogout';

export default function Aside({ links }) {
  const { isLoggedIn } = useAuthProvider();
  const [openAlert, setOpenAlert] = useState(true);

  const logout = useLogout();

  const handleLogout = async () => {
    try {
      await logout();
      Navigate('/login', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className='fixed z-50 top-0 left-0 h-[100vh] w-full max-w-[20rem] rounded-none p-4 shadow-xl bg-[#1c2434] shadow-blue-gray-900/5'>
      <div className='mb-2 flex items-center gap-4 p-4'>
        <Link to='/'>
          <img
            src='https://cdn.hashnode.com/res/hashnode/image/upload/v1700420010311/cb052fc8-a3e6-4425-8b87-1d8c300642ac.png'
            alt='brand'
            className=''
          />
        </Link>
      </div>
      <List className='text-white'>
        {links.map((link) => {
          return (
            <AsideButton
              key={link.name}
              link={link}
            />
          );
        })}
      </List>
      {isLoggedIn?.user?.subscription === 'free' && <Alert
        open={openAlert}
        className='mt-auto bg-[#2c3850]'
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className='mb-4 h-12 w-12' />
        <Typography
          variant='h6'
          className='mb-1'
        >
          Upgrade to PRO
        </Typography>
        <Typography
          variant='small'
          className='font-normal opacity-80'
        >
          Get access to all premium features
        </Typography>
        <div className='mt-4 flex gap-3'>
          <Typography
            as='a'
            href='#'
            variant='small'
            className='font-medium opacity-80'
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography
            as='a'
            href='#'
            variant='small'
            className='font-medium'
          >
            Upgrade Now
          </Typography>
        </div>
      </Alert>}
      <List className='mt-auto'>
        <ListItem className='text-white mt-2 hover:bg-[#fff] hover:bg-opacity-90 hover:text-primary-05 group'>
          <ListItemPrefix>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 inline-block'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
              />
            </svg>
          </ListItemPrefix>
          <button onClick={handleLogout}>

          Sign Out
          </button>
        </ListItem>
      </List>
    </Card>
  );
}
