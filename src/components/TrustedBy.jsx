import React from 'react';
import { company_logos } from '../assets/assets';

const TrustedBy = () => {
  return (
    <div className='flex flex-col gap-10 px-4 py-10'>
      <h3 className='font-semibold text-center'>Trusted by Leading Companies</h3>

      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6 lg:gap-6 items-center justify-items-center lg:pl-76'>
        {company_logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Company ${index + 1}`} className='max-h-5'/>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;