import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border-2 border-gray-300 dark:border-gray-700 
    hover:shadow-md hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 group">

      <div className="flex items-center justify-center w-20 h-12 lg:w-24 px-1 lg:px-1 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-white">
        <img src={service.icon} alt="" className="h-6 w-6" />
      </div>

     
      <div>
        <h3 className="font-semibold text-lg mb-1">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white/90">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;