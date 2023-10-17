import React from 'react'
import {motion} from "framer-motion"

const About = () => {

    const [move,setMove] =React.useState(false);

  return (
    <div name='about' className='w-full h-screen bg-[#dfdfdf]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:text-left pb-8 pl-4'>
                    <motion.div  
                        animate={{x: move ? 200 : -200 }}
                        transition={{type:"tween", duration:3}}
                        onClick={()=>{
                            setMove(!move)
                            
                        }}
                    >

                    
                    <p className='font-bold text-4xl inline border-b-4 border-[#a8136f]'>About</p> </motion.div>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Chuan, nice to meet you. </p>
                    
                </div>
                <div>
                    <p>
                    Hey there! I'm a fresh grad in software development, and I'm all about creating software that's slick, efficient, and user-friendly. 
                    During my studies, I got hands-on with real projects, which amped up my excitement to make stuff that genuinely helps people in their daily lives. 
                    Teamwork is my jam—I love bouncing ideas off others and working together to make awesome things happen. Always up for learning something new, I'm stoked to keep up with the ever-changing tech scene and bring my enthusiasm and skills to the table. 
                    Let's dive into this exciting world of software development and make some cool stuff! 🚀 </p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
