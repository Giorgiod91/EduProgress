import React from "react";

const features = [
  {
    icon: "/subject1.svg",
    title: "Organize Your Tasks",
    description:
      "Easily add, edit, and track your study tasks in one place. Never lose sight of what needs to be done.",
    color: "from-blue-500/20 to-blue-600/10",
    ring: "ring-blue-500/20",
  },
  {
    icon: "/prorgress1.svg",
    title: "Track Progress",
    description:
      "Keep track of tasks across different subjects effortlessly. Visual dashboards show your momentum at a glance.",
    color: "from-primary/20 to-orange-600/10",
    ring: "ring-primary/20",
  },
  {
    icon: "/time1.svg",
    title: "Manage Your Time",
    description:
      "Allocate time for each task and stay on top of your schedule. Make every study session count.",
    color: "from-secondary/20 to-pink-600/10",
    ring: "ring-secondary/20",
  },
];

function Banner1() {
  return (
    <section className="relative py-24">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-screen-xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Why EduProgress
          </div>
          <h2 className="mb-4 text-4xl font-black text-white lg:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          <p className="mx-auto max-w-lg text-base text-base-content/50">
            Powerful tools designed to keep you organized, focused, and
            motivated throughout your learning journey.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/8 hover:shadow-lg"
            >
              {/* Hover gradient overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>

              {/* Icon */}
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} ring-1 ${feature.ring}`}
              >
                <img src={feature.icon} alt="" className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-lg font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-base-content/50">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle divider glow bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

export default Banner1;
