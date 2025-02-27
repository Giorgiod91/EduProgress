import LandingPage from "~/app/components/LandingPage";
import StudyBoard from "~/app/components/StudyBoard";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import DashBoard from "./components/DashBoard";
import CreateModule from "./components/CreateModule";
import Navbar from "./components/Navbar";
import Banner1 from "./components/Banner1";
import Demo from "./components/Demo";
import PaymentCards from "./components/PaymentCards";
import Faq from "./components/Faq";
import Demo2 from "./components/Demo2";
import SetGoals from "./components/SetGoals";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="h-screen">
        <LandingPage />
      </section>
      <section className="">
        <Banner1 />
      </section>

      <section id="demo" className="h-3/5 p-20">
        <Demo />
      </section>
      <section className="h-3/5 bg-base-300 p-20">
        <Demo2 />
      </section>

      <section id="Payment" data-theme="">
        <PaymentCards />
      </section>
      <section id="faq" className="h-screen">
        <Faq />
      </section>
    </main>
  );
}
