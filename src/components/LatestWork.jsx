import React from 'react';
import assets from '../assets/assets';

const LatestWork = () => {
    return (
    <div id="latestwork" className="flex flex-col items-center gap-10 px-4 pt-20">
    <div className="flex flex-col items-center text-center gap-2 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"> Our latest work
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl">
      Browse our portfolio of innovation digital project that showcase  creativity, performance and results
      </p>
    </div>

      <div className='grid grid-cols-1 lg:grid-cols-3  gap-5  rounded'>
        <div className='flex flex-col gap-0 border border-gray-500 rounded-lg hover:scale-102 duration-500'>
            <img src={assets.work_mobile_app} className='w-80 max-w-80'/>
            <h2 className='font-semibld p-1'>Mobile app marketing</h2>
            <p className='text-gray-500 text-sm p-1 '>We turn bold ideas into powerful digital<br/> solution that connect</p>
        </div>
        <div className='flex flex-col gap-0 border border-gray-500 rounded-lg hover:scale-102 duration-500'>
            <img src={assets.work_dashboard_management} className='w-80 max-w-80'/>
            <h2 className='font-semibld p-1'>Dashboard Management</h2>
            <p className='text-gray-500 text-sm p-1 '>We turn bold ideas into powerful digital<br/> solution that connect</p>
        </div>
        <div className='flex flex-col gap-0 border border-gray-500 rounded-lg hover:scale-102 duration-500'>
            <img src={assets.work_fitness_app} className='w-80 max-w-80'/>
            <h2 className='font-semibld p-1'>Fitness app promotion</h2>
            <p className='text-gray-500 text-sm p-1'>We turn bold ideas into powerful digital<br/> solution that connect</p>
        </div>
      </div>

    </div>
    );
};

export default LatestWork;