import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className='bg-white'>
      <img
        src={blog.image}
        alt='blog'
      />
      <div className='px-6 py-6'>
        <p>{blog.title}</p>
        <p className='text-[12px] font-semibold pt-2'>
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
