import React from 'react';

const ApplicantCard = () => {
  return (
    <div
      key={app.id}
      className='flex justify-between items-center p-4 border-b border-b-slate-300'
    >
      <div className='flex items-center'>
        <div className='mr-4'>
          <a href='https://ibb.co/mTsNFWx'>
            <img
              className='w-20 h-20 rounded-full object-cover'
              src='https://i.ibb.co/mTsNFWx/edet.png'
              alt='edet'
              border='0'
            />
          </a>
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center'>
            <p className='text-slate-600 mr-2'>Name:</p>
            <h1 className='text-lg font-medium'>{`${app?.firstName} ${app?.lastName}`}</h1>
          </div>
        </div>
      </div>
      <div className='mr-4 flex items-center gap-2'>
        <button
          aria-label='View'
          type='button'
          className='bg-gray-300 w-10 h-10 rounded-full mr-2'
        >
          <RemoveRedEyeIcon />
        </button>
        {app.jobApplication.status === 'pending' ? (
          <>
            <button
              onClick={() =>
                updateApplicationStatus(
                  app.jobApplication.jobId,
                  app.id,
                  'accepted'
                )
              }
              aria-label='accept'
              type='button'
              className='bg-gray-300 w-10 h-10 rounded-full mr-2'
            >
              <CheckIcon />
            </button>
            <button
              onClick={() =>
                updateApplicationStatus(
                  app.jobApplication.jobId,
                  app.id,
                  'rejected'
                )
              }
              aria-label='delete'
              type='button'
              className='bg-gray-300 w-10 h-10 rounded-full'
            >
              <DeleteIcon />
            </button>
          </>
        ) : (
          <div className='flex items-center gap-2'>
            {app.jobApplication.status === 'accepted' ? (
              <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text font-medium text-green-700 ring-1 ring-inset ring-green-600/10 mr-2'>
                accepted
              </span>
            ) : (
              <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2'>
                Rejected
              </span>
            )}

            <button
              onClick={() =>
                updateApplicationStatus(
                  app.jobApplication.jobId,
                  app.id,
                  'pending'
                )
              }
              aria-label='undo'
              type='button'
              className='bg-gray-300 w-10 h-10 rounded-full'
            >
              <ReplayIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicantCard;
