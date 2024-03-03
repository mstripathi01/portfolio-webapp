import React, { useState } from "react";
import tesla from "../assets/portfolio/tesla.png";
import pokemon from "../assets/portfolio/pokemon.png";
import demo from "../assets/portfolio/demo.png";
import gym from "../assets/portfolio/gym.png";
import ecommercewebapp from "../assets/portfolio/ecommercewebapp.png";
import netflixgpt from "../assets/portfolio/netflixgpt.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      src: ecommercewebapp,
      demoUrl: "https://ecommerce-web-app-smoky.vercel.app/",
      codeUrl: "https://github.com/mstripathi01/ecommerce-web-app",
    },
    {
      id: 2,
      src: tesla,
      demoUrl: "https://teslaclone-web-app.vercel.app/",
      codeUrl: "https://github.com/mstripathi01/teslaclone-app",
    },
    {
      id: 3,
      src: pokemon,
      demoUrl: "https://pokemon-api-286ca.web.app/",
      codeUrl: "https://github.com/mstripathi01/Pokemon-App",
    },
    {
      id: 4,
      src: demo,
      demoUrl: "https://portfolio-webapp-three.vercel.app/",
      codeUrl: "https://github.com/mstripathi01/portfolio-webapp",
    },
    {
      id: 5,
      src: gym,
      demoUrl: "https://thefitclubgym.pages.dev/",
      codeUrl: "https://github.com/mstripathi01/gymwebsite",
    },
    {
      id: 6,
      src: netflixgpt,
      demoUrl: "https://netflixgpt-72d40.web.app/",
      codeUrl: "https://github.com/mstripathi01/netflix-gpt",
    },
  ];

  const handleButtonClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={project.src}
                alt=""
                className="w-full rounded-t-md hover:opacity-80 transition duration-300"
              />
              <div className="p-4">
                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-md my-2 hover:opacity-80 transition duration-300"
                  onClick={() => handleButtonClick(project.demoUrl)}
                >
                  Demo
                </button>
                <button
                  className="w-full bg-gray-700 text-white py-2 rounded-md my-2 hover:opacity-80 transition duration-300"
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
