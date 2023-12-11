const Testimonial = ({ test }) => {
  return (
    <div className='mx-auto w-full max-w-[70%] flex items-center gap-10'>
      <img
        className='rounded-full h-96 w-96 object-cover object-center'
        src={test.img}
        alt='tania andrew'
      />
      <div>
        <i class='fa-solid fa-quote-left text-[32px]'></i>
        <p class='text-[#222C2C] text-[18px] font-semibold'>
          {test.description}
        </p>
        <i class='fa-solid fa-quote-right flex justify-end text-[32px]'></i>
        <p class='text-[#222C2C] text-[14px] font-semibold'>{test.name}</p>
        <p class='text-[#222C2C] text-[14px]'>Backend Developer</p>
        <p class='text-[#222C2C] text-[18px]'>{test.company}</p>
      </div>
    </div>
  );
};

export default Testimonial;
