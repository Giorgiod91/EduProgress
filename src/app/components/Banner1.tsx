import React from "react";

type Props = {};

function Banner1({}: Props) {
  return (
    <div className="" data-theme="light">
      <section className="p-10">
        <div className="mb-8 text-center"></div>
        <div className="flex justify-around">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full border border-orange-500 bg-gray-200 p-4">
              <img src="/subject1.svg" alt="" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Organize Your Tasks</h3>
            <p className="mt-2">
              Easily add, edit, and track your study tasks in one place.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full border border-orange-500 bg-gray-200 p-4">
              {" "}
              <img src="/prorgress1.svg" alt="" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Track Progress</h3>
            <p className="mt-2">
              Keep track of tasks across different subjects effortlessly.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full border border-orange-500 bg-gray-200 p-4">
              {" "}
              <img src="/time1.svg" alt="" />
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
