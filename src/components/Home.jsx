import React from "react";
import Hero from "../assets/hero1.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full pl-8 pr-2 md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start h-full md:w-1/2">
          <p className="text-xl text-white py-3 font-semibold">
            Hey, My Name is
          </p>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Mayank Shekhar Tripathi
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            An enthusiastic developer with a knack for building products with
            good UI and UX.
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-72">
          <img
            src={Hero}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
