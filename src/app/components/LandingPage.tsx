import Image from "next/image";
import Link from "next/link";
import React from "react";
import StudyBoard from "./StudyBoard";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div data-theme="" className="h-screen text-white">
      <div className="container mx-auto flex h-screen flex-col space-x-5 p-5 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center md:w-1/2">
          <div>
            <div className="mb-10 flex w-full flex-col items-center px-4 text-center lg:mb-0 lg:w-full lg:items-start lg:text-left">
              <h1 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-black tracking-tight text-transparent drop-shadow-xl sm:text-6xl md:text-7xl">
                Track your Learning Progress
              </h1>
              <p className="mb-8 text-xl text-gray-400">
                Track your learning progress and stay on top of your study and
                see what you archived
              </p>
              <button className="btn btn-wide mb-4 bg-primary text-white hover:bg-primary/70">
                <a href="#Payment">Lets go!</a>
              </button>
              <p className="text-sm text-gray-400">
                aviable on the following platforms
              </p>
              <div className="mt-2 flex justify-center">
                <FaApple
                  className="mx-2 h-10 w-24 object-contain"
                  color="white"
                />
                <FcGoogle className="mx-2 h-10 w-24 object-contain" />
              </div>

              <div className="mt-2 flex justify-center"></div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="w-full rounded-lg border border-primary shadow-xl md:w-auto">
            <StudyBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
