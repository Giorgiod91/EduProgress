import React from "react";
import StudyBoard from "./StudyBoard";
import DashGrafic from "./DashGrafic";
import DashGrafik2 from "./DashGrafik2";
import DashChart from "./DashChart";
import StudyBoardDb from "./StudyBoardDb";

type Props = {};

function DashBoard({}: Props) {
  const sampleData = [
    { date: "2023-07-01", progress: 10 },
    { date: "2023-07-02", progress: 20 },
    { date: "2023-07-03", progress: 30 },
  ];
  return (
    <div className="">
      <h1 className="flex items-center justify-center text-7xl">Dashoboard</h1>
      <div className="flex h-screen w-full">
        {/* Left section (ul) */}
        <section className="w-1/7 m-5 h-5/6 rounded-lg border-4 border-primary bg-gray-200 p-5 shadow-lg">
          <h1 className="flex items-center justify-center text-xl text-primary">
            Navigation
          </h1>
          <ul className="menu w-56 rounded-box bg-base-200">
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Overview
              </a>
            </li>
            <li>
              <a href="#Create">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Create Module
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                FeedBack
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Set Monthly Goal
              </a>
            </li>
          </ul>
        </section>
        {/* Middle section */}
        <section className="m-5 h-5/6 flex-1 rounded-lg border-4 border-primary bg-gray-300 p-5 shadow-lg">
          <h1 className="flex items-center justify-center text-xl text-primary">
            Modules
          </h1>
          <div className="flex items-center justify-center">
            <StudyBoardDb />
          </div>
        </section>
        {/* Right section */}
        <section className="m-5 h-5/6 w-3/6 overflow-hidden rounded-lg border-4 border-primary bg-gray-200 p-5 shadow-lg">
          <h1 className="flex justify-center text-xl text-primary">Progress</h1>
          <div className="flex h-screen flex-col overflow-hidden">
            <div className="flex h-1/5 overflow-hidden">
              <DashGrafic />
            </div>
            <div className="flex items-center justify-center p-5">
              <DashGrafik2 />
            </div>
            <div className="flex items-center justify-center p-5">
              <DashChart data={sampleData} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashBoard;
