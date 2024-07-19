import Link from "next/link";
import React, { use, useEffect } from "react";
import { getServerAuthSession } from "~/server/auth";
import Popup from "./Popup";

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
              <Link href="#demo">Demo</Link>
            </li>
            <li>
              <Link href="#Payment">Pricing</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
          </ul>
        </div>
        <img className="w-12" src="./logo2.jpg" alt="logo" />
        <Link
          href="/"
          className="btn btn-ghost text-xl tracking-tight text-transparent"
        >
          <span className="flex">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-orange-500 hover:from-yellow-500 hover:to-orange-400 hover:text-white">
              Study
            </span>
            <span className="text-white">Prog</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="#demo"
              className="text-xl font-black text-white hover:bg-primary"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#Payment"
              className="text-xl font-black text-white hover:bg-primary"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="text-xl font-black text-white hover:bg-primary"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session ? (
          <>
            <div>
              <Link href="/Users" className="btn btn-wide bg-primary">
                Member Are
              </Link>
            </div>

            <button className="btn btn-wide bg-primary">
              <Link
                href="/api/auth/signout"
                className="btn btn-wide flex items-center bg-primary text-white hover:bg-primary/70"
              >
                <img src="./logo2.jpg" className="w-5" alt="applogo" />
                <span className="ml-2">Sign Out</span>
              </Link>
            </button>
          </>
        ) : (
          <button className="btn btn-wide bg-primary">
            <Link
              href="/api/auth/signin"
              className="btn btn-wide flex items-center bg-primary text-white hover:bg-primary/70"
            >
              <img src="./logo2.jpg" className="w-5" alt="applogo" />
              <span className="ml-2">Sign In</span>
            </Link>
          </button>
        )}
      </div>
      <div className="sticky p-4">
        <Popup />
      </div>
    </div>
  );
}
