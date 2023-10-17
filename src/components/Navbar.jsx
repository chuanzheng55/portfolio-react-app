import React,{useState} from 'react'
import {FaBars, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaTimes,FaTimesCircle} from 'react-icons/fa'
import { Link } from 'react-scroll'

import Logo from '../assets/logo.png'

const Navbar = () => {
    const  [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#031530] text-gray-300'  >
        <div>
            <img src={Logo} width='300px' height='64px' alt='Logo Image' />
        </div>

        {/* navbar menu */}
        
            <ul className='hidden md:flex'>
                <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li><Link to='projects' smooth={true} duration={500}>Project</Link></li>
                <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
      

        {/* Hamburger menu */}
        <div onClick={handleClick} className='md:hidden z-10'>

           {!nav? <FaBars /> : <FaTimesCircle/>} 
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#031530] flex flex-col justify-center items-center'} >
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='projects' smooth={true} duration={500}>Project</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>

                 {/* Social icons*/}
         <div className='pt-40'>
            <p className='uppercase -tracking-widest text-[#a8136f]'>Let's Connect !</p>
            <br></br>
            <div className='flex items-center justify-between my-1 w-full sm:w-[10%]'>
            <a
              href='https://www.linkedin.com/in/chuanzheng9755/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedin/>
              </div>
            </a>
            <a
              href='https://github.com/chuanzheng55/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub/>
              </div>
            </a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaInstagram/>
              </div>

            </div>

         </div>
        </ul>


         {/* Social icons*/}
         <div className='hidden'></div>


    </div>
  )
}

export default Navbar

