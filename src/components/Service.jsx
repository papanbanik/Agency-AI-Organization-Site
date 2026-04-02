import React from 'react';
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';

const Service = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.ads_icon,
    },
    {
      title: 'Content marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.marketing_icon,
    },
    {
      title: 'Content writing',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
      icon: assets.content_icon,
    },
    {
      title: 'Social media',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.social_icon,
    },
  ];

  return (
    <div id="service" className="flex flex-col items-center gap-10 px-4 pt-10">
      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

  
      <div className="grid grid-cols-1 max-sm:grid-cols-1 sm:grid-cols-2 gap-6 max-sm:w-92 max-w-2xl">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default Service;