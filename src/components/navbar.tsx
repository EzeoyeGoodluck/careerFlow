import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="CareerFlow home"
          >
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-xl bg-emerald-700 text-sm font-bold text-white"
            >
              CF
            </span>

            <span className="text-lg font-semibold tracking-tight">
              CareerFlow
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 md:flex"
          >
            <a
              href="#how-it-works"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
            >
              How it works
            </a>

            <a
              href="#features"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Features
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="hidden text-sm font-medium text-zinc-700 hover:text-zinc-950 sm:inline"
            >
              Sign in
            </Link>

            <Link
              href="/sign-up"
              className="rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
