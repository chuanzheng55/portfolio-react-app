import React from 'react';
import { data } from "../data/data.js";

const Project = () => {
  const project = data;

  return (
    <div id='projects' className='w-full  min-h-screen flex items-center justify-center bg-gradient-to-r from-[#c0d6db] to-[#31a3a7]'>

      <div className='max-w-[1240px] mx-auto p-4'>
        <div className='text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#a8136f]'>
            My Work
          </p>
          <p className='py-6'>Personal and Academic Projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {project.map((item, index) => (
            <div
              key={index}
              className='shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div'
              style={{ backgroundImage: `url(${item.image})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '200px' }}
            >
              <div className="opacity-0 group-hover:opacity-100 bg-[#ebeaeac3] w-full h-full flex flex-col justify-center items-center rounded-lg transition-opacity duration-300 ease-in-out">
                <span className="text-2xl font-bold text-[#d85454] mb-4">
                  {item.name}
                </span>
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#040c16] font-bold">
                    Source
                  </button>
                </a>
            
                {/* <a href={item.live} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#040c16] font-bold">
                    Demo
                  </button>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
