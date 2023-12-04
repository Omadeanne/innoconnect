import React from 'react';
import CardDetail from './CardDetail';

const Card = ({ details }) => {
  return (
    <div className='grid md:grid-cols-4 text-primary-05 sm:grid-cols-1 gap-6 my-4 py-2 text-center snap-x'>
      {details.map((detail) => (
          <CardDetail key={detail.title} detail={detail} />
      ))}
    </div>
  );
};

export default Card;
