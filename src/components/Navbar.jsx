import React, { useState } from 'react';
import { FaBars, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

const DesktopMenu = () => (
  <ul className='hidden md:flex'>
    <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
    <li><Link to='about' smooth={true} duration={500}>About</Link></li>
    <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
    <li><Link to='projects' smooth={true} duration={500}>Projects</Link></li>
    <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
  </ul>
);

const MobileMenu = ({ isNavOpen, toggleNav }) => (
  <ul className={`${isNavOpen ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-[#031530] flex-col justify-center items-center`}>
    <li className='py-6 text-4xl'><Link onClick={toggleNav} to='home' smooth={true} duration={500}>Home</Link></li>
    <li className='py-6 text-4xl'><Link onClick={toggleNav} to='about' smooth={true} duration={500}>About</Link></li>
    <li className='py-6 text-4xl'><Link onClick={toggleNav} to='skills' smooth={true} duration={500}>Skills</Link></li>
    <li className='py-6 text-4xl'><Link onClick={toggleNav} to='projects' smooth={true} duration={500}>Projects</Link></li>
    <li className='py-6 text-4xl'><Link onClick={toggleNav} to='contact' smooth={true} duration={500}>Contact</Link></li>
  </ul>
);

// const SocialLinks = () => (
//   <div className='hidden lg:flex fixed bottom-0 mb-4 justify-center w-full'>
//     <a href='https://www.linkedin.com/in/chuanzheng9755/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
//       <FaLinkedin className='text-xl hover:text-blue-600 m-2' />
//     </a>
//     <a href='https://github.com/chuanzheng55/' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
//       <FaGithub className='text-xl hover:text-gray-700 m-2' />
//     </a>
//     <a href='https://www.instagram.com/armletz_/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
//       <FaInstagram className='text-xl hover:text-pink-600 m-2' />
//     </a>
//     <a href='mailto:chuanzheng9755@gmail.com' aria-label='Email'>
//       <FaMailBulk className='text-xl hover:text-red-600 m-2' />
//     </a>
//   </div>
// );

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#031530] text-gray-300'>
      <img src={Logo} alt='Logo' className='w-[300px] h-[64px]' />
      <DesktopMenu />
      <button onClick={toggleNav} className='md:hidden z-10' aria-label='Toggle navigation'>
        {nav ? <FaTimes /> : <FaBars />}
      </button>
      <MobileMenu isNavOpen={nav} toggleNav={toggleNav} > </MobileMenu>
    </nav>
  );
};

export default Navbar;
