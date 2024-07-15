import LandingPage from "~/app/components/LandingPage";
import StudyBoard from "~/app/components/StudyBoard";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import DashBoard from "./components/DashBoard";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <main className="flex min-h-screen flex-col">
      <section className="h-screen">
        <LandingPage />
      </section>
      <section className="h-screen">
        <StudyBoard />
      </section>
      <section className="">
        <DashBoard />
      </section>
    </main>
  );
}
