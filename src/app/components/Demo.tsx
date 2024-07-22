import React from "react";

function Demo() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:gap-16">
      <video
        className="aspect-square w-full rounded-3xl border-2 border-base-content/20 sm:w-[26rem] md:border-4"
        autoPlay
        muted
        loop
        playsInline
        controls
        width="100%"
        height="auto"
      >
        <source src="/demofinal.mp4" type="video/mp4" />
        <source src="/demofinal.mp4" type="video/mp4" />
      </video>
      <div className="max-w-lg space-y-6 md:space-y-8">
        <h2 className="text-3xl font-black leading-tight tracking-tight md:text-5xl md:leading-tight">
          Track your Study
        </h2>
        <p className="text-base-content-secondary leading-relaxed">
          Keep track of how much you&apos;ve learned. Add new modules to your
          study plan and mark them as finished.
        </p>

        <a
          href="#Payment"
          className="btn btn-primary btn-block shadow-lg md:btn-wide hover:bg-primary/70"
        >
          Track your own
        </a>
      </div>
    </div>
  );
}

export default Demo;
