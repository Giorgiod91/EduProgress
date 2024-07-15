import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

export default async function Navbar() {
  const session = await getServerAuthSession();
  return (
    <div className="navbar mx-auto max-w-screen-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a href="#demo">Demo</a>
            </li>
            <li>
              <a className="" href="#payment">
                Pricing
              </a>
            </li>
            <li>
              <a>about</a>
            </li>
          </ul>
        </div>
        <img className="w-12" src="./logo2.jpg" alt="logo" />
        <a className="btn btn-ghost text-xl tracking-tight text-transparent">
          <span className="flex">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-red-500 hover:from-blue-500 hover:to-cyan-400 hover:text-white">
              Study
            </span>
            <span className="text-white">Prog</span>
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="#demo"
              className="from-red-500 to-pink-500 text-xl font-black text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400"
            >
              Features
            </a>
          </li>
          <li></li>
          <li>
            <a
              href="#payment"
              className="from-red-500 to-pink-500 text-xl font-black text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400"
            >
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session ? (
          <button className="via-magenta-500 btn btn-wide bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:to-cyan-400 hover:text-black">
            <a
              href="/api/auth/signin"
              className="btn btn-wide flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:to-cyan-400 hover:text-black"
            >
              <img src="./logo2.jpg" className="w-5" alt="applogo" />
              <span className="ml-2">Sign Out</span>
            </a>
          </button>
        ) : (
          <button className="via-magenta-500 btn btn-wide bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:to-cyan-400 hover:text-black">
            <a
              href="/api/auth/signin"
              className="btn btn-wide flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:to-cyan-400 hover:text-black"
            >
              <img src="./logo2.jpg" className="w-5" alt="applogo" />
              <span className="ml-2">Sign In</span>
            </a>
          </button>
        )}
      </div>
    </div>
  );
}
