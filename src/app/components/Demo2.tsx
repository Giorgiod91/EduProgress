import React from "react";

const featureList = [
  "Visual progress charts for all subjects",
  "Subject-wise learning breakdown",
  "Monthly and weekly goal summaries",
  "Identify your strongest & weakest areas",
];

function Demo2() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
      <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-20">
        {/* Image */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-secondary/30 to-primary/20 opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src="/memberarea.png"
              alt="Member dashboard preview"
              className="w-full"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full space-y-7 lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            Member Dashboard
          </div>

          <h2 className="text-4xl font-black leading-tight text-white lg:text-5xl">
            Your learning{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              command center
            </span>
          </h2>

          <p className="text-base leading-relaxed text-base-content/50">
            Get a bird&apos;s-eye view of your entire learning journey. Charts,
            stats, and insights — all beautifully organized in one dashboard.
          </p>

          <ul className="space-y-3">
            {featureList.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20 text-[11px] font-bold text-secondary ring-1 ring-secondary/30">
                  ✓
                </span>
                <span className="text-sm text-base-content/70">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#Payment"
            className="btn border-0 bg-gradient-to-r from-secondary to-primary text-white shadow-lg transition-all hover:opacity-90"
          >
            Get Dashboard Access
          </a>
        </div>
      </div>
    </div>
  );
}

export default Demo2;
