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

  const handleButtonClick = (demoUrl, codeUrl) => {
    if (demoUrl) {
      window.open(demoUrl, "_blank");
    }
    if (codeUrl) {
      window.open(codeUrl, "_blank");
    }
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() =>
                    handleButtonClick(project.demoUrl, project.codeUrl)
                  }
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
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
