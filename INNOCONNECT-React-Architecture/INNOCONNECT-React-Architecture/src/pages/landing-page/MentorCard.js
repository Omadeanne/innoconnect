
const MentorCard = ({ mentor }) => {
  return (
    <li>
      <div
        className='bg-white px-14 py-6 rounded-lg'
        id='slide1'
      >
        <img
          src={mentor.image}
          alt='mentor'
          className='w-36 h-36 object-cover object-center rounded-full'
        />
        <div className='items-center text-center mt-2'>
          <p className='text[#222C2C] font-semibold'>{mentor.name}</p>
          <p className='text-[#435758]'>
            {mentor.description}
            <br />
          </p>
        </div>
      </div>
    </li>
  );
};

export default MentorCard;
