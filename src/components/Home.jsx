import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id='home' className='w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#c0d6db] to-[#31a3a7]'>
      <div className='text-center'>
        <p className='text-sm uppercase tracking-widest text-gray-100'>
          Welcome to My Portfolio
        </p>
        <h1 className='pt-2 text-4xl lg:text-6xl font-bold text-white'>
          Hi, I'm <span className='text-[#332642]'>Chuan</span>
        </h1>
        <TypeAnimation
          className='text-[#332642] inline-block text-2xl lg:text-4xl font-bold'
          sequence={[
            'A Full Stack Developer', 3000,
            'Passionate About Coding', 3000,
            'Ready to Create', 3000
          ]}
          wrapper="span"
          speed={70}
          repeat={Infinity}
        />
        <p className='py-4 text-lg text-gray-200 sm:max-w-[70%] mx-auto'>Recent graduate with a strong passion for software development and a knack for learning new technologies, 
seeking an entry-level position to apply and expand my coding skills in a team-oriented environment.</p>
        <div className='flex items-center justify-center gap-6 pt-4'>
          <a
            href='https://www.linkedin.com/in/chuanzheng9755/'
            target='_blank'
            rel='noreferrer'
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <FaLinkedinIn className='text-white text-2xl' />
          </a>
          <a
            href='https://github.com/chuanzheng55/'
            target='_blank'
            rel='noreferrer'
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <FaGithub className='text-white text-2xl' />
          </a>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineMail className='text-white text-2xl' />
          </Link>
          <a
            href='https://www.instagram.com/armletz_/'
            target='_blank'
            rel='noreferrer'
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <FaInstagram className='text-white text-2xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
