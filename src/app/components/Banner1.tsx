import React from "react";

type Props = {};

function Banner1({}: Props) {
  return (
    <div className="" data-theme="light">
      <section className="p-10">
        <div className="mb-8 text-center"></div>
        <div className="flex justify-around">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-gray-200 p-4">
              <img src="/calendar.svg" alt="" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Organize Your Tasks</h3>
            <p className="mt-2">
              Easily add, edit, and track your study tasks in one place.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-gray-200 p-4">
              {" "}
              <svg
                className="h-full w-full text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zM5 12h14"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Track Subjects</h3>
            <p className="mt-2">
              Keep track of tasks across different subjects effortlessly.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-gray-200 p-4">
              {" "}
              <svg
                className="h-full w-full text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7-7-7 7-7z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Manage Your Time</h3>
            <p className="mt-2">
              Allocate time for each task and stay on top of your schedule.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner1;
