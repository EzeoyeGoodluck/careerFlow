import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-zinc-950 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      {/* Hero Section */}

      <main id="main-content">
        <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-800">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-emerald-600"
              />
              Your job search, organised
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
              Track every opportunity. Prepare for every conversation.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              CareerFlow brings applications, interview preparation, contacts,
              and follow-ups into one calm workspace so you always know what
              needs your attention.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/sign-up"
                className="rounded-xl bg-emerald-700 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
              >
                Start tracking for free
              </Link>

              <a
                href="#how-it-works"
                className="rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-center text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-100"
              >
                See how it works
              </a>
            </div>

            <p className="mt-4 text-sm text-zinc-500">
              Built for focused job seekers. No credit card required.
            </p>
          </div>
        </section>

         {/* Hero images Section with Tabs */}

         <section>
          
         </section>

        {/* features section */}
        <section
          id="features"
          className="border-t border-zinc-200/80 bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Everything in one place
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                A clearer way to manage your job search
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-600">
                CareerFlow gives you the structure you need to organise
                opportunities, monitor progress, and focus on your next action.
              </p>
            </div>

            <ul className="mt-12 grid gap-8 md:grid-cols-3">
              <li className="flex flex-col">
                <div className="grid size-12 place-items-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                  <Briefcase
                    aria-hidden="true"
                    className="size-6 text-emerald-700"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
                  Organise applications
                </h3>

                <p className="mt-3 max-w-sm text-base leading-7 text-zinc-600">
                  Create boards and stages to track every application from
                  initial interest through to a final decision.
                </p>
              </li>

              <li className="flex flex-col">
                <div className="grid size-12 place-items-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                  <TrendingUp
                    aria-hidden="true"
                    className="size-6 text-emerald-700"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
                  Track progress
                </h3>

                <p className="mt-3 max-w-sm text-base leading-7 text-zinc-600">
                  Follow each opportunity through applications, screenings,
                  interviews, offers, and follow-up actions.
                </p>
              </li>

              <li className="flex flex-col">
                <div className="grid size-12 place-items-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-6 text-emerald-700"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">
                  Stay organised
                </h3>

                <p className="mt-3 max-w-sm text-base leading-7 text-zinc-600">
                  Keep job details, notes, contacts, deadlines, and next steps
                  together so nothing important gets lost.
                </p>
              </li>
            </ul>

            <div className="mt-14 flex flex-col items-start gap-4 border-t border-zinc-200/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-zinc-950">
                  Ready to organise your job search?
                </p>

                <p className="mt-1 text-sm text-zinc-600">
                  Start for free. No credit card required.
                </p>
              </div>

              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                Start for free
                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 size-4"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
