import LandingPage from "~/app/components/LandingPage";
import StudyBoard from "~/app/components/StudyBoard";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import DashBoard from "./components/DashBoard";
import CreateModule from "./components/CreateModule";
import Navbar from "./components/Navbar";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="h-screen">
        <LandingPage />
      </section>
      <section className="h-screen">
        <StudyBoard />
      </section>
      <section className="">
        <DashBoard />
      </section>
      <section>
        {session ? <CreateModule /> : <div>Need to be logged in</div>}
      </section>
    </main>
  );
}
