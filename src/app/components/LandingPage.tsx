import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 bg-base-100 px-8 py-8 lg:flex-row lg:gap-20 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-10 text-center lg:items-start lg:gap-8 lg:text-left">
        <h1 className="sm-max-md:w-3/5 text-5xl font-extrabold tracking-tight sm:mb-4 md:mb-8 md:text-5xl lg:mb-4 lg:w-full lg:text-7xl">
          Organize Your Study Tasks
        </h1>
        <div>
          <a
            href=""
            className="btn-gradient animate-shimmer btn btn-primary btn-wide"
          >
            Lets go
          </a>
        </div>
      </div>
      <div className="h-[600px] w-[600px] lg:w-full lg:items-end lg:justify-end">
        <Image
          src="/screen.png"
          alt="screen"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default LandingPage;
