import LandingPage from "~/app/components/LandingPage";
import Navbar from "./components/Navbar";
import Banner1 from "./components/Banner1";
import Demo from "./components/Demo";
import PaymentCards from "./components/PaymentCards";
import Faq from "./components/Faq";
import Demo2 from "./components/Demo2";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col">
      {/* Fixed navbar — adds pt-16 offset handled inside LandingPage */}
      <Navbar />

      {/* Hero */}
      <section>
        <LandingPage />
      </section>

      {/* Features */}
      <section className="bg-base-200/40">
        <Banner1 />
      </section>

      {/* Demo — Study tracking */}
      <section id="demo" className="py-28">
        <Demo />
      </section>

      {/* Demo — Dashboard */}
      <section className="bg-base-200/40 py-28">
        <Demo2 />
      </section>

      {/* Pricing */}
      <section id="Payment">
        <PaymentCards />
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-base-200/30">
        <Faq />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-base-content/30">
        <div className="mx-auto max-w-screen-xl px-6">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              StudyProg
            </span>{" "}
            — Built to help you learn better.
          </p>
        </div>
      </footer>
    </main>
  );
}
