import React from "react";

type Props = {};

function Demo2({}: Props) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:gap-16">
      <img src="/demoshot.png" alt="" />

      <div className="max-w-lg space-y-6 md:space-y-8">
        <h2 className="pt-11 text-3xl font-black leading-tight tracking-tight md:text-5xl md:leading-tight">
          Track your Study
        </h2>
        <p className="text-base-content-secondary leading-relaxed">
          Keep track of how much you've learned. Add new modules to your study
          plan and mark them as finished.
        </p>
        <a
          href="#Payment"
          className="btn btn-primary btn-block shadow-lg md:btn-wide"
        >
          Track your own
        </a>
      </div>
    </div>
  );
}

export default Demo2;
