import React from 'react';
import { Link } from 'react-router-dom';

const AsideButton = ({ link }) => {
  return (
    <li className=' justify-center pl-7 p-2  mx-5 my-3 text-white hover:bg-white hover:text-blue-900 hover:rounded-lg'>
      <Link
        to={link.to}
        className='flex'
      >
        {link.icon}

        <span className='font-semibold text-xl pl-4'>{link.name}</span>
      </Link>
    </li>
  );
};

export default AsideButton;
