import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import ozzy from '../assets/ozzy.JPG';

const About = () => {
    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <div id='about' className='w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#c0d6db] to-[#31a3a7]'>
            <InView threshold={0.5}>
                {({ inView, ref }) => (
                    <motion.div 
                        ref={ref}
                        className='container mx-auto p-4 flex flex-col md:flex-row items-center justify-center'
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={textVariants}
                    >
                        <img 
                            src={ozzy} 
                            alt='ozzy'
                            className='w-80 h-80 rounded-full shadow-lg mb-8 md:mb-0'
                        />
                        <div className='text-center md:text-left md:max-w-md lg:max-w-lg ml-8'>
                            <h1 className='text-5xl font-bold text-[#333] mb-3'>
                                About Me
                            </h1>
                            <p className='text-lg'>
                                I'm Chuan Zheng, a recent graduate in software development, driven by the passion to create innovative and accessible software solutions. My academic and project experiences have honed my skills in teamwork, problem-solving, and adaptability. I'm eager to continue my journey in technology, constantly learning and contributing to impactful projects. Let's collaborate and create something amazing! 🚀
                            </p>
                        </div>
                    </motion.div>
                )}
            </InView>
        </div>
        
    );
}

export default About;
