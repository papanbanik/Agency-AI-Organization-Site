import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Service from './components/Service';
import LatestWork from './components/LatestWork';
import Team from './components/Teams';
import Footer from './components/Footer';
import Contact from './components/Contact'
import {Toaster} from 'react-hot-toast'
function App() {
  const [theme, setTheme] = useState('light')
  return (
    <div className=''>
      <Toaster/>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero/>
        <TrustedBy/>
        <Service/>
        <LatestWork/>
        <Team/>
        <Contact/>
        <Footer theme={theme}/>
    </div>
  )
}

export default App
