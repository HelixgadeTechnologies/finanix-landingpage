import { useState } from 'react';
import modalicon from '../public/icons/modalicon.png';
import Image from 'next/image';

const TradesModalset = (props) => {
  const handleModalSubmit = (e) => {
    e.preventDefault();
    props.onHandleModal();
  };

  console.log('set');

  return (
    <div>
      <div className="w-full h-screen fixed top-0 left-0 bg-slate-400 bg-opacity-70 z-[1000] pointer-events-none overflow-hidden"></div>

      <div className="absolute top-44 inset-x-0 mx-auto w-fit bg-white text-black z-[2000] px-6 md:w-96">
              <div className="flex flex-col gap-3 my-6 max-w-xs">
                  <h1 className='text-md md:text-lg'>Disconnect AI Support</h1>
                  <p className='text-xs max-w-sm'>
                      Kindly Disconnect your profile from
                      AI Support feature to view your trades.
                      If error still persists, contact customer
                      support via email.
                  </p>
        <button onClick={handleModalSubmit} className="bg-tradesred text-white px-3 py-1 text-sm rounded-md" >
            okay
        </button>
        </div>
        </div>
    </div>
  );
};

export default TradesModalset;
