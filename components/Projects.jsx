import React from 'react';
import algo from '../public/assets/projects/first.png';
import Ecom from '../public/assets/projects/second.png'
import movie from '../public/assets/projects/third.png'
import ProjectItem from './ProjectItem.jsx';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'> 
          <ProjectItem
            title='Ecommerce-Website'
            backgroundImg={Ecom}
            projectUrl='/ecom'
            tech='MERN Stack'

          />
           <ProjectItem
            title='MOVIE WEBSITE'
            backgroundImg={movie}
            projectUrl='/movie'
            tech='React JS'

          />
          <ProjectItem
            title='Algorithm Visualizer'
            backgroundImg={algo}
            projectUrl='/algo'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;