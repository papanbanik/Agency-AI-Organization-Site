import React from 'react';
import assets from '../assets/assets';

const Hero = () => {
    return (
        <div className='flex flex-col items-center gap-6 py-20 dark:text-white'>
            
            <div className='flex flex-row items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
                <img className='w-20' src={assets.group_profile} alt=''/>
                 <p className='text-xs font-medium'>Trusted by 10k+ people</p>
            </div>
            
            <h1 className='text-4xl font-medium text-center'>Turning imagination into <br/>  <span className=' bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'> digital </span>imapact</h1>
            <p className='text-sm font-medium text-gray-500 dark:text-white text-center'>Creating meaningful connections and turning big ideas <br/>into interactive digital experience </p>

            <div className='relative'>
                <img src={assets.hero_img} alt='' className='w-full max-sm:w-lg max-w-4xl'/>
                <img src={assets.bgImage1} alt='' className='absolute -top-60 -right-40 -z-1 dark:hidden'/>
            </div>
        </div>
    );
};

export default Hero;