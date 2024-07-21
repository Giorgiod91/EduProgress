import React from "react";

import DashBoard from "../components/DashBoard";
import CreateModule from "../components/CreateModule";
import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import SetGoals from "../components/SetGoals";

type Props = {};

async function page({}: Props) {
  const session = await getServerAuthSession();
  return (
    <div className="flex min-h-screen flex-col">
      {session ? (
        <>
          <section id="Board">
            <h1 className="items-center justify-center">Member Are</h1>
            <button className="btn btn-wide bg-primary">
              <Link
                href="/api/auth/signout"
                className="btn btn-wide flex items-center bg-primary text-white hover:bg-primary/70"
              >
                <img src="./logo2.jpg" className="w-5" alt="applogo" />
                <span className="ml-2">Sign Out</span>
              </Link>
            </button>

            <DashBoard />
          </section>
          <section id="Create" className="">
            <div className="just flex items-center">
              <a href="#Board">
                <h1 className="text-7xl">back to DaashBoard ⬆️</h1>
              </a>
            </div>

            <CreateModule />
            <section id="goal">
              <a href="#Board">
                <h1 className="text-7xl">back to DaashBoard ⬆️</h1>
              </a>
              <SetGoals />
            </section>
          </section>
        </>
      ) : (
        <div>
          <h1>Need to be logged in!</h1>
          <button className="btn btn-wide bg-primary">
            <Link
              href="/api/auth/signin"
              className="btn btn-wide flex items-center bg-primary text-white hover:bg-primary/70"
            >
              <img src="./logo2.jpg" className="w-5" alt="applogo" />
              <span className="ml-2">Sign In</span>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default page;
