import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import Popup from "./Popup";

export default async function Navbar() {
  const session = await getServerAuthSession();

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-base-100/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/40 blur-md" />
              <img
                className="relative h-9 w-9 rounded-full object-cover ring-2 ring-primary/30"
                src="./logo2.jpg"
                alt="logo"
              />
            </div>
            <Link href="/" className="text-xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Study
              </span>
              <span className="text-white">Prog</span>
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
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
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-xl border border-white/10 bg-base-200 p-2 shadow-xl"
            >
              <li>
                <Link href="#demo" className="text-base-content/70 hover:text-white">Features</Link>
              </li>
              <li>
                <Link href="#Payment" className="text-base-content/70 hover:text-white">Pricing</Link>
              </li>
              <li>
                <Link href="#faq" className="text-base-content/70 hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {[
              { href: "#demo", label: "Features" },
              { href: "#Payment", label: "Pricing" },
              { href: "#faq", label: "FAQ" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-base-content/60 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            {session ? (
              <>
                <Link
                  href="/Users"
                  className="btn btn-ghost btn-sm text-base-content/70 hover:text-white"
                >
                  Member Area
                </Link>
                <Link
                  href="/api/auth/signout"
                  className="btn btn-sm border-0 bg-gradient-to-r from-primary to-orange-400 text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:opacity-90"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <Link
                href="/api/auth/signin"
                className="btn btn-sm border-0 bg-gradient-to-r from-primary to-orange-400 text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:opacity-90"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Popup positioned outside navbar flow */}
      <div className="fixed right-4 top-4 z-[60]">
        <Popup />
      </div>
    </>
  );
}
