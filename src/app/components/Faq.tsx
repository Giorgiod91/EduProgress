"use client";
import React from "react";

const faqs = [
  {
    question: "What is Study Progress app?",
    answer:
      "The Study Progress app helps you track your learning journey efficiently. It includes features such as goal setting, progress tracking, and more. You can organize your study materials, monitor your achievements, and stay motivated throughout your learning process.",
  },
  {
    question: "What features does the Study Progress app offer?",
    answer:
      "The app offers goal setting, progress tracking, reminders (coming soon), and interactive dashboards. You can add unlimited tasks, track time spent per subject, and visualize your growth with charts.",
  },
  {
    question: "Can I customize the Study Progress app?",
    answer:
      "Yes! The app is designed to be flexible. You can customize study goals, modules, and subjects. More customization features — including leaderboards to compare progress with friends — are coming soon.",
  },
  {
    question: "I am a student and want the student price.",
    answer:
      "Absolutely. Just send us an email at foquss@web.de with your student ID and we'll give you the student discount — currently 50% off the Pro plan.",
  },
  {
    question: "How can I get support?",
    answer:
      "For support, reach out via email at foquss@web.de. We typically respond within 24 hours on weekdays.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-28">
      {/* Subtle top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            FAQ
          </div>
          <h2 className="text-4xl font-black text-white lg:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-2xl space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                activeIndex === index
                  ? "border-primary/40 bg-primary/5"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <button
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
                onClick={() => handleClick(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="font-semibold text-white">
                  {faq.question}
                </span>
                <span
                  className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all duration-200 ${
                    activeIndex === index
                      ? "rotate-45 border-primary bg-primary/20 text-primary"
                      : "border-white/20 text-white/40"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-sm leading-relaxed text-base-content/50">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-base-content/40">Still have questions?</p>
          <a
            href="mailto:foquss@web.de"
            className="btn border border-white/20 bg-transparent text-white hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Faq;
