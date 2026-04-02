import React from 'react';
import {teamData} from '../assets/assets'; 
const Teams = () => {
    return (
    <div id="latestwork" className="flex flex-col items-center gap-10 px-4 pt-20">
    <div className="flex flex-col items-center text-center gap-2 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"> Meet the team
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl">
A passionate team of digital experts dedicated to your <br/> brands success</p>
    </div>

      <div  className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
       {teamData.map((value,index)=>{
        return  <div key={index} className='flex items-center gap-4 border border-gray-400 rounded p-2 hover:scale-102 duration-500'>
                          <img  src={value.image}  className='w-16 h-16 rounded-full'/>
                          <div>
                          <h2>{value.name}</h2>
                          <p>{value.title}</p>
                          </div>
                    </div>
       })}
      </div>

    </div>
    );
};

export default Teams;