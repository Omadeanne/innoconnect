import ProfileAndNotifications from '../nav_footer/ProfileAndNotifications';
import useAuthProvider from '../../../context/useAuthProvider';
import { Chip } from '@mui/material';

const Header = () => {
  const { isLoggedIn } = useAuthProvider();

  return (
    <header className='sticky top-0 right-0 z-50'>
      <div className='py-2 items-center justify-between drop-shadow-sm bg-[#ffffff] flex'>
        <div
          className='lg:hidden flex text-2xl ml-4'
          id='open-menu'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5'
            />
          </svg>
        </div>

        <div className='p-2 ml-4'>
          <h1 className='text-2xl font-bold'>
            Welcome {isLoggedIn?.user?.firstName}
          </h1>
        </div>

        {isLoggedIn.user.subscription !== 'free' && (
          <div className='p-2 ml-4 capitalize'>
             <Chip label={isLoggedIn.user.subscription} variant="outlined" />
          </div>
        )}

        {/* notification bell and profile */}
        <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mr-7'>
          <ProfileAndNotifications />
        </div>
      </div>
    </header>
  );
};

export default Header;
