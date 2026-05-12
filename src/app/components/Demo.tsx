import React from "react";

const featureList = [
  "Add modules to your study plan in seconds",
  "Track completion status in real-time",
  "Mark tasks as finished with one click",
  "Monitor your learning velocity over time",
];

function Demo() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Video */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-primary/30 to-secondary/20 opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <video
              className="w-full"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="/demofinal.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Text */}
        <div className="w-full space-y-7 lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Feature Spotlight
          </div>

          <h2 className="text-4xl font-black leading-tight text-white lg:text-5xl">
            Track your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Study
            </span>
          </h2>

          <p className="text-base leading-relaxed text-base-content/50">
            Keep track of how much you&apos;ve learned. Add new modules to your
            study plan and mark them as finished as you go.
          </p>

          <ul className="space-y-3">
            {featureList.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-[11px] font-bold text-primary ring-1 ring-primary/30">
                  ✓
                </span>
                <span className="text-sm text-base-content/70">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#Payment"
            className="btn border-0 bg-gradient-to-r from-primary to-orange-400 text-white shadow-lg shadow-primary/25 transition-all hover:opacity-90 hover:shadow-primary/40"
          >
            Start Tracking
          </a>
        </div>
      </div>
    </div>
  );
}

export default Demo;
