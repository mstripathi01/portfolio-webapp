import React, { useState } from 'react';
import ecommerceApplication from '../assets/portfolio/blog-application.jpeg';
import covidWorld from '../assets/portfolio/covid-worldometer.jpeg';
import restaurant from '../assets/portfolio/Restaurant.png';
import etherpay from '../assets/portfolio/etherpay.png';
import demo from '../assets/portfolio/demo.png';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      src: ecommerceApplication,
      codeUrl: 'https://github.com/tripathimayank/ecommerce-web-app'
    },
    {
      id: 2,
      src: covidWorld,
      demoUrl: 'https://youtu.be/bDCLbfkdy0s',
      codeUrl: 'https://github.com/trishitaNandy/CovidWorldometer/tree/main/site'
    },
    {
        id: 3,
        src: restaurant,
        demoUrl: 'https://trishitanandy.github.io/Restaurent-Website/Restaurant-site/',
        codeUrl: 'https://github.com/trishitaNandy/Restaurent-Website'
    },
    {
        id: 4,
        src: etherpay,
        demoUrl: 'https://ether-pay.netlify.app/',
        codeUrl: 'https://github.com/trishitaNandy/EtherPay-Blockchain'
    },
    {
        id: 5,
        src: demo,
        demoUrl: 'https://example.com/demo2',
        codeUrl: 'https://example.com/demo2'
    },
    {
        id: 6,
        src: demo,
        demoUrl: 'https://example.com/demo2',
        codeUrl: 'https://example.com/demo2'
    },
    // Add demoUrl and codeUrl for other projects
  ];

  const handleButtonClick = (demoUrl, codeUrl) => {
    if (demoUrl) {
      window.open(demoUrl, '_blank');
    }
    if (codeUrl) {
      window.open(codeUrl, '_blank');
    }
  };

  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map((project) => (
            <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={project.src} alt='' className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={() => handleButtonClick(project.demoUrl, project.codeUrl)}
                >
                  Demo
                </button>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={() => handleButtonClick(project.codeUrl)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div>
            <p>Selected project: {selectedProject.demoUrl}</p>
            <p>Selected project: {selectedProject.codeUrl}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
