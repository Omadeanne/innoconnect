import { ListItem, ListItemPrefix } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const AsideButton = ({ link }) => {
  return (
    <Link to={link.to}>
      <ListItem className='hover:bg-[#fff] hover:bg-opacity-90 hover:text-primary-05 group'>
        <ListItemPrefix>{link.icon}</ListItemPrefix>
        {link.name}
      </ListItem>
    </Link>
  );
};

export default AsideButton;
