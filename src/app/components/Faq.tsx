import React from "react";

type Props = {};

function Faq({}: Props) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-24 md:flex-row">
      <div className="flex flex-col text-left md:w-1/2">
        <p className="mb-8 text-3xl font-extrabold text-base-content sm:text-4xl">
          Frequently Asked Questions
        </p>
        <div className="text-base-content/80">
          Placeholder text. Have another question? Contact me on Twitter or by
          email.
        </div>
      </div>
      <ul className="md:w-1/2">
        <li>
          <button
            className="plausible-event-name=What+do+I+get+exactly? relative flex w-full items-center gap-2 border-t border-base-content/10 py-5 text-left text-base font-semibold md:text-lg"
            aria-expanded="false"
          >
            <span className="flex-1 text-base-content">
              Question 1 Placeholder
            </span>
            <svg
              className="ml-auto h-4 w-4 flex-shrink-0 fill-current"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className="false origin-center transform transition duration-200 ease-out"
              ></rect>
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className="false origin-center rotate-90 transform transition duration-200 ease-out"
              ></rect>
            </svg>
          </button>
          <div
            className="overflow-hidden opacity-80 transition-all duration-300 ease-in-out"
            style={{ maxHeight: "0", opacity: "0" }}
          >
            <div className="pb-5 leading-relaxed">
              <div className="space-y-4 leading-relaxed">
                <p>Answer 1 Placeholder</p>
                <p>Additional details...</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <button
            className="plausible-event-name=Javascript+or+Typescript? relative flex w-full items-center gap-2 border-t border-base-content/10 py-5 text-left text-base font-semibold md:text-lg"
            aria-expanded="false"
          >
            <span className="flex-1 text-base-content">
              Question 2 Placeholder
            </span>
            <svg
              className="ml-auto h-4 w-4 flex-shrink-0 fill-current"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className="false origin-center transform transition duration-200 ease-out"
              ></rect>
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className="false origin-center rotate-90 transform transition duration-200 ease-out"
              ></rect>
            </svg>
          </button>
          <div
            className="overflow-hidden opacity-80 transition-all duration-300 ease-in-out"
            style={{ maxHeight: "0", opacity: "0" }}
          >
            <div className="pb-5 leading-relaxed">
              <p>Answer 2 Placeholder</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Faq;
