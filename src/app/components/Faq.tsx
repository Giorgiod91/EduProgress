"use client";
import React from "react";

type Props = {};

function Faq({}: Props) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
      <ul className="basis-1/2">
        <li>
          <button
            className="plausible-event-name=What+is+Study+Progress+app? relative flex w-full items-center gap-2 border-t border-base-content/10 py-5 text-left text-base font-semibold md:text-lg"
            aria-expanded={activeIndex === 1 ? "true" : "false"}
            onClick={() => handleClick(1)}
          >
            <span className="flex-1 text-base-content">
              What is the Study Progress app about?
            </span>
            <svg
              className={`ml-auto h-4 w-4 flex-shrink-0 transform fill-current ${
                activeIndex === 1 ? "rotate-90" : ""
              }`}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className="origin-center transform transition duration-200 ease-out"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden opacity-80 transition-all duration-300 ease-in-out ${
              activeIndex === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-5 leading-relaxed">
              <div className="space-y-4 leading-relaxed">
                <p>
                  The Study Progress app helps you track your learning journey
                  efficiently. It includes features such as goal setting,
                  progress tracking, personalized study plans, and more.
                </p>
                <p>
                  You can organize your study materials, monitor your
                  achievements, and stay motivated throughout your learning
                  process.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <button
            className="plausible-event-name=What+features+does+it+offer? relative flex w-full items-center gap-2 border-t border-base-content/10 py-5 text-left text-base font-semibold md:text-lg"
            aria-expanded="false"
          >
            <span className="flex-1 text-base-content">
              What features does the Study Progress app offer?
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
            style={{ maxHeight: 0, opacity: 0 }}
          >
            <div className="pb-5 leading-relaxed">
              <p>The Study Progress app offers features like:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Goal setting for your study objectives.</li>
                <li>Progress tracking to monitor your learning milestones.</li>
                <li>Personalized study plans tailored to your needs.</li>
                <li>Integration with study materials and resources.</li>
                <li>Reminders and notifications to keep you on track.</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <button
            className="plausible-event-name=Can+I+customize+it? relative flex w-full items-center gap-2 border-t border-base-content/10 py-5 text-left text-base font-semibold md:text-lg"
            aria-expanded="false"
          >
            <span className="flex-1 text-base-content">
              Can I customize the Study Progress app?
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
            style={{ maxHeight: 0, opacity: 0 }}
          >
            <div className="pb-5 leading-relaxed">
              <div className="space-y-2 leading-relaxed">
                <p>
                  Yes, the Study Progress app is designed to be flexible. You
                  can customize settings, study goals, and content according to
                  your preferences.
                </p>
                <p>
                  You can also integrate additional features or third-party
                  tools that complement your learning style and needs.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <button
            className="plausible-event-name=Is+it+free+to+use? relative flex w-full items-center gap-2 border-t border-base-content/10 py-5 text-left text-base font-semibold md:text-lg"
            aria-expanded="false"
          >
            <span className="flex-1 text-base-content">
              Is the Study Progress app free to use?
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
            style={{ maxHeight: 0, opacity: 0 }}
          >
            <div className="pb-5 leading-relaxed">
              <div className="space-y-2 leading-relaxed">
                <p>
                  Yes, the basic features of the Study Progress app are
                  available for free. However, there may be premium features or
                  upgrades that require a subscription or one-time purchase.
                </p>
                <p>
                  You can start using the app for free and explore additional
                  options based on your study needs and preferences.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <button
            className="plausible-event-name=How+can+I+get+support? relative flex w-full items-center gap-2 border-t border-base-content/10 py-5 text-left text-base font-semibold md:text-lg"
            aria-expanded="false"
          >
            <span className="flex-1 text-base-content">
              How can I get support for the Study Progress app?
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
            style={{ maxHeight: 0, opacity: 0 }}
          >
            <div className="pb-5 leading-relaxed">
              <div className="space-y-2 leading-relaxed">
                <p>
                  For support with the Study Progress app, you can reach out via
                  email at support@studyprogress.com or visit our community
                  forum at forum.studyprogress.com.
                </p>
                <p>
                  Our support team is available to assist you with any questions
                  or issues you may encounter while using the app.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Faq;
