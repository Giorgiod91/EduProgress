import React from "react";
import StudyBoard from "./StudyBoard";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="animate-pulse-glow absolute right-1/4 top-2/3 h-[350px] w-[350px] rounded-full bg-secondary/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-screen-2xl items-center px-6 py-28 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left — Text */}
          <div className="flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Track. Learn. Achieve.
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-primary via-orange-400 to-secondary bg-clip-text text-transparent">
                Track your
              </span>
              <br />
              <span className="text-white">Learning</span>
              <br />
              <span className="text-white">Progress</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-md text-lg leading-relaxed text-base-content/50">
              Stay on top of your studies. Set goals, track milestones, and see
              exactly how far you&apos;ve come.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#Payment"
                className="btn btn-lg border-0 bg-gradient-to-r from-primary to-orange-400 text-white shadow-lg shadow-primary/25 transition-all hover:opacity-90 hover:shadow-primary/40"
              >
                Get Started
              </a>
              <a
                href="#demo"
                className="btn btn-lg border border-white/20 bg-transparent text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10"
              >
                See Demo
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-2">
              <div>
                <div className="text-2xl font-black text-white">500+</div>
                <div className="text-xs text-base-content/40">Active Students</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-black text-white">10k+</div>
                <div className="text-xs text-base-content/40">Tasks Tracked</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-black text-white">98%</div>
                <div className="text-xs text-base-content/40">Satisfaction</div>
              </div>
            </div>

            {/* Platform badges */}
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <p className="text-xs text-base-content/30">
                Coming soon on
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
                  <FaApple className="h-4 w-4 text-white/70" />
                  <span className="text-xs text-white/50">App Store</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
                  <FcGoogle className="h-4 w-4" />
                  <span className="text-xs text-white/50">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Demo card */}
          <div className="flex items-center justify-center">
            <div className="animate-float relative w-full max-w-2xl">
              {/* Glow behind card */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-primary/30 to-secondary/20 opacity-50 blur-2xl" />
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-base-200/60 p-5 shadow-2xl backdrop-blur-sm">
                {/* Fake window header */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                  <div className="ml-4 h-4 flex-1 rounded bg-white/5" />
                </div>
                <StudyBoard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
