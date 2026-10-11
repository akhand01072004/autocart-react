
import {
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const futureGoals = [
  {
    icon: Target,
    title: "Better Service Experiences",
    description:
      "Focus on convenient, dependable automotive service experiences that put customer needs first.",
  },
  {
    icon: Lightbulb,
    title: "Technology-Driven Solutions",
    description:
      "Explore technology and innovative approaches to improve automotive service operations.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description:
      "Support automotive skill development and training to help professionals grow with industry needs.",
  },
  {
    icon: TrendingUp,
    title: "Stronger Partnerships",
    description:
      "Build meaningful collaborations with businesses and partners across the automotive ecosystem.",
  },
];

function OurFuture() {
  return (
    <section
      id="our-future"
      className="scroll-mt-24 overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Our Future
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Driving Towards a{" "}
              <span className="text-cyan-600">Smarter Automotive Future</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              We envision an automotive ecosystem where dependable services,
              skilled professionals, technology, and collaboration work
              together to create better experiences and new opportunities.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-400 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-600"
            >
              Connect With Us
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Right content */}
          <div className="relative">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-cyan-100/70 blur-3xl" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="relative grid gap-5 sm:grid-cols-2">
              {futureGoals.map((goal, index) => {
                const Icon = goal.icon;

                return (
                  <article
                    key={goal.title}
                    className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg ${
                      index % 2 === 1 ? "sm:translate-y-8" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {goal.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {goal.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="mt-24 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-700 px-7 py-10 sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Looking Ahead
          </p>

          <h3 className="mt-4 max-w-3xl text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
            Moving the automotive industry forward, one opportunity at a time.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default OurFuture;
