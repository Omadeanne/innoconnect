import { WorkOutline } from '@mui/icons-material';
import Header from '../../Components/molecules/mentee-dashboard/Header';
import {
  community,
  course,
  mentor,
} from '../../Components/molecules/mentee-dashboard/icons';
import { Link, Outlet } from 'react-router-dom';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Alert,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CubeTransparentIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import AsideButton from '../../Components/molecules/mentee-dashboard/AsideButton';
import useAuthProvider from '../../context/useAuthProvider';

const links = [
  
  {
    name: 'Mentors',
    to: '/mentees-dashboard/my-mentors',
    icon: mentor,
  },
  {
    name: 'Todos',
    to: '/mentees-dashboard/todos',
    icon: course,
  },
  {
    name: 'community',
    to: '/community',
    icon: community,
  },
];

export default function MenteesDashboard() {
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);
  const { isLoggedIn } = useAuthProvider();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className='flex relative'>
      <div className='relative'>
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
            <Link to='/mentees-dashboard'>
              <ListItem>
                <ListItemPrefix>
                  <CubeTransparentIcon className='h-5 w-5' />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </Link>
            {/* <ListItem>
              <ListItemPrefix>
                <InboxIcon className='h-5 w-5' />
              </ListItemPrefix>
              Messages
            </ListItem> */}
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform text-white ${
                    open === 1 ? 'rotate-180' : ''
                  }`}
                />
              }
            >
              <ListItem
                className='p-0'
                selected={open === 1}
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className='border-b-0 p-3 text-white'
                >
                  <ListItemPrefix>
                    <WorkOutline className='h-5 w-5' />
                  </ListItemPrefix>
                  <Typography className='mr-auto font-normal '>Jobs</Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className='py-1 '>
                <List className='p-0'>
                  <Link to={'/mentees-dashboard/bookmarks'}>
                    <ListItem className='text-white'>
                      <ListItemPrefix>
                        <ChevronRightIcon
                          strokeWidth={3}
                          className='h-3 w-5'
                        />
                      </ListItemPrefix>
                      Bookmarks
                    </ListItem>
                  </Link>
                  <Link to={'/mentees-dashboard/applied-jobs'}>
                    <ListItem className='text-white'>
                      <ListItemPrefix>
                        <ChevronRightIcon
                          strokeWidth={3}
                          className='h-3 w-5'
                        />
                      </ListItemPrefix>
                      Applied
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            {links.map((link) => {
              return (
                <AsideButton
                  key={link.name}
                  link={link}
                />
              );
            })}
          </List>
          {isLoggedIn?.user?.subscription === 'free' &&<Alert
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
              <Link to='/pricing'>
                <Typography
                  as='a'
                  href='#'
                  variant='small'
                  className='font-medium'
                >
                  Upgrade Now
                </Typography>
              </Link>
            </div>
          </Alert>}
          <ListItem className='text-white mt-2 hover:bg-[#fff] hover:bg-opacity-90 hover:text-primary-05 group'>
            <ListItemPrefix>
              <PowerIcon className='h-5 w-5' />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Card>
      </div>
      <div className=' bg-gray-200 w-full min-h-[100vh] overflow-auto flex flex-col justify-between ml-[20rem]'>
        <div className='h-full'>
          <Header />
          <Outlet />
          <div className='border-t my-4 py-4'>
            <h1 className='text-center'>
              © 2023 InnoConnect. All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
