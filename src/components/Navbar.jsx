import React, { useState } from 'react';
import assets from '../assets/assets';
import ToggleBtn from './ToggleBtn';

const Navbar = ({ theme, setTheme }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 font-medium relative'>

      {/* Logo */}
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32'
        alt='logo'
      />

      {/* Menu Links */}
      <div className={`
        flex gap-5 items-center
        sm:flex-row
        max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:h-screen max-sm:bg-primary max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-white max-sm:transition-all max-sm:duration-300 
        max-sm: z-50
        ${sidebar ? 'max-sm:w-60' : 'max-sm:w-0 overflow-hidden'}
      `}>

        {/* Close Button */}
        <img
          src={assets.close_icon}
          alt=''
          className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer'
          onClick={() => setSidebar(false)}
        />

        <a href='#' onClick={() => setSidebar(false)} className='hover:border-b'>Home</a>
        <a href='#service' onClick={() => setSidebar(false)} className='hover:border-b'>Service</a>
        <a href='#latestwork' onClick={() => setSidebar(false)} className='hover:border-b'>Our Work</a>
        <a href='#contact' onClick={() => setSidebar(false)} className='hover:border-b'>Contacts</a>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-4'>

        {/* Toggle Button */}
        <div className='hidden sm:block'>
          <ToggleBtn theme={theme} setTheme={setTheme} />
        </div>

        {/* Connect Button */}
        <a href='#' className='hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white text-sm'>
          Connect
          <img src={assets.arrow_icon} width={14} alt='' />
        </a>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          onClick={() => setSidebar(true)}
          className='w-8 sm:hidden cursor-pointer'
          alt=''
        />
      </div>

    </div>
  );
};

export default Navbar;