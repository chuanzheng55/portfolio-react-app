import React from 'react';
import {data} from "../data/data.js";


const Project = () => {

    // projects file
    const project = data;
  

  return (
    <div name='projects' className='w-full h-screen bg-[#dfdfdf]'>
      <div className='mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
        <div className='pb-1'>
          <p className='text-4xl font-bold inline border-b-4 border-[#a8136f]'>
           My Work
          </p>
          <p className='py-6'>Personal and Academic Projects</p>
        </div>

{/* container for projects */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 h-[500px] mx-auto">
          
          {/* Gird Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})`, backgroundPosition:'center', backgroundSize:'cover'}}
    className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center text-center items-center h-[180px] mx-auto content-div">
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-[#d85454] ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white  font-bold text-lg"
          >
            Source
          </button>
        </a>
        {/* eslint-disable-next-line */}
        
        {/* <a href={item.live} target="_blank">
        
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white font-bold text-lg"
          >
            Demo
          </button>
        </a> */}
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Project;