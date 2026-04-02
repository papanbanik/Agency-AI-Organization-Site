import React from 'react';

const Title = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center text-center gap-2 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl">
        {desc}
      </p>
    </div>
  );
};

export default Title;