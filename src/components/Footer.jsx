import React from 'react';
import assets from '../assets/assets';

const Footer = ({ theme }) => {
  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 sm:gap-20 py-10 px-5 bg-gray-800 text-white w-full mt-20 px-10'>
      
      {/* Left Section */}
      <div className='flex flex-col gap-5'>
        <img src={theme === 'dark' ? assets.logo : assets.logo_dark} className='w-32' alt='Logo'/>
        <p className='text-gray-300 text-sm leading-6'>
          From strategy to execution we craft <br/> digital solutions that move your business forward
        </p>
        <div className='flex gap-4 mt-2'>
          <img src={assets.facebook_icon} alt='Facebook' className='w-6 h-6 cursor-pointer'/>
          <img src={assets.twitter_icon} alt='Twitter' className='w-6 h-6 cursor-pointer'/>
          <img src={assets.linkedin_icon} alt='LinkedIn' className='w-6 h-6 cursor-pointer'/>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='flex flex-col mt-5 sm:mt-0'>
        <h2 className='text-lg font-semibold'>Subscribe to our newsletter</h2>
        <p className='text-gray-300 text-sm mt-2'>
          The latest news articles and resources sent to your inbox weekly
        </p>
        <div className='flex gap-2 mt-3'>
          <input type='text' placeholder='Enter your email' className='p-2 outline-none border rounded'/>
          <button className='border rounded-lg p-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-700'>
            Subscribe
          </button>
        </div>
      </div>

    </div>
  );
};

export default Footer;