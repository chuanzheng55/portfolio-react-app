import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-[#dfdfdf]'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='text-sm tracking-widest inline border-b-4  text-gray-600'>
            WELCOME TO MY PAGE
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, <TypeAnimation className='text-[#2d5188]'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'My name is Chuan',
        3000, // wait 1s before replacing "Mice" with "Hamsters
        'I am a Full Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </h1>
          {/* <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1> */}
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          I am an ambitious student looking to obtain an entry level position in software engineering or related fields.
        Offering excellent problem-solving skills and knowledge of various programming languages.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/chuanzheng9755/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/chuanzheng55/'  
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link to='contact' smooth={true} duration={500}>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
              </Link>
              <a
              href='https://www.instagram.com/armletz_/'  
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram/>
              </div>
              </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};



export default Home;