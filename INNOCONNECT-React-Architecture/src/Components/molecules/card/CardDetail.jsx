import React from 'react';

const CardDetail = ({ detail }) => {
  return (
    <div className='bg-[#ffffff] rounded-lg py-10 h-40 pr-10 pl-10 snap-center hover:scale-105 flex justify-evenly items-center shadow-md'>
      <div className='h-20 w-20 rounded-full bg-blue-gray-100 flex justify-center items-center'>
        {detail.icon}
      </div>
      <div className='text-left'>
        <h2 className='rounded-full text-2xl text-center font-bold '>
          {detail.count}
        </h2>
        <p className='font-semibold'>{detail.title}</p>
      </div>
    </div>
  );
};

export default CardDetail;
