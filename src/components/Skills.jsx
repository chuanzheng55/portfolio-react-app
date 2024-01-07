import C from '../assets/c.png';
import Tailwind from '../assets/tailwind.png';
import Git from '../assets/git.png';
import Java from '../assets/Java.png';
import cpp from '../assets/c++.png'
import Python from '../assets/python.png'
import PHP from '../assets/php.png'
import SQL from '../assets/sql.png'
import css from '../assets/css.png'
import Docker from '../assets/docker.png'
import Flask from '../assets/Flask.png'
import Spacy from '../assets/spacy.png'
import aStudio from '../assets/androidStudio.png'
import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard'; 
import Html from '../assets/html.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import { InView } from 'react-intersection-observer';



const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  initial: {
    y: 20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Skills = () => {
  const skills = [
  { title: 'HTML', image: Html },
  { title: 'JavaScript', image: Javascript },
  { title: 'React', image: ReactImg },
  { title: 'Java', image: Java },
  { title: 'C', image: C },
  { title: 'C++', image: cpp },
  
  { title: 'Python', image: Python },
  { title: 'PHP', image: PHP },
  { title: 'SQL', image: SQL },
  { title: 'CSS', image: css },
  { title: 'Docker', image: Docker },
  { title: 'Flask', image: Flask },
  { title: 'spaCy', image: Spacy },
  { title: 'Android Studio', image: aStudio },
  { title: 'Tailwind CSS', image: Tailwind },
  { title: 'Git', image: Git },
  ];


  return (
    <InView threshold={0.5}>

      <div id='skills' className='w-full   min-h-screen  flex items-center justify-center bg-gradient-to-r from-[#c0d6db] to-[#31a3a7]'>

      <div className='flex flex-col items-center w-full '>
        <div className='pb-8'>
          <h1 className='text-4xl font-bold inline border-b-4 border-[#a8136f]'>
            SKILLS
          </h1>
        </div>
        <h2 className='py-4'>What I Can Do</h2>
        <motion.div
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 px-5'
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {skills.map(skill => (
            <motion.div key={skill.title} variants={itemVariants}>
              <SkillCard title={skill.title} image={skill.image} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
          
    </InView>
  );
};



export default Skills;



