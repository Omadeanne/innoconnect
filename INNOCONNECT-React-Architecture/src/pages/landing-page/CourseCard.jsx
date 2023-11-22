import React from 'react';

const CourseCard = ({course}) => {
  return (
    <div className='bg-[#DAE5EB3D] px-14 py-6 rounded-lg'>
      <img
        src={course.img}
        alt='course'
        className='object-cover object-center'
      />
      <p className='text-[#222C2C] text-[22px] pt-4 font-semibold'>
        {course.name}
      </p>
    </div>
  );
};

export default CourseCard;
