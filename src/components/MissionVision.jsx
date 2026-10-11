
import { ArrowUpRight, Compass, Eye, Target } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Customer-first thinking",
    description:
      "Put customer needs, service quality and trust at the centre of every interaction.",
    icon: Target,
  },
  {
    number: "02",
    title: "Practical innovation",
    description:
      "Look for better ways to connect automotive services, people and business opportunities.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Long-term progress",
    description:
      "Encourage skills, collaboration and sustainable growth across the automotive ecosystem.",
    icon: Eye,
  },
];

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="relative overflow-hidden bg-[#F2F8FB] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 sm:text-sm">
            <span className="h-[2px] w-8 rounded-full bg-cyan-500" />
            Mission & Vision
            <span className="h-[2px] w-8 rounded-full bg-cyan-500" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A clearer direction for{" "}
            <span className="text-cyan-600">automotive progress.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Our focus is to help connect services, skills and opportunities
            in ways that create lasting value for the automotive ecosystem.
          </p>
        </div>

        {/* Mission and vision cards */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          <article className="group relative overflow-hidden rounded-2xl bg-[#07334A] p-7 text-white sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-125"
            />

            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
              <Target size={27} />
            </div>

            <p className="relative mt-8 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Our mission
            </p>

            <h3 className="relative mt-3 text-2xl font-bold sm:text-3xl">
              Make automotive services more connected.
            </h3>

            <p className="relative mt-4 max-w-xl leading-8 text-slate-300">
              Bring together service solutions, business support and
              skill development to help customers and industry partners
              move forward with confidence.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-cyan-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-900/5 sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-cyan-100 transition-transform duration-500 group-hover:scale-125"
            />

            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <Eye size={27} />
            </div>

            <p className="relative mt-8 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Our vision
            </p>

            <h3 className="relative mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Help shape a stronger automotive ecosystem.
            </h3>

            <p className="relative mt-4 max-w-xl leading-8 text-slate-600">
              Work towards an ecosystem where people, processes and
              partnerships support better service experiences and
              opportunities for growth.
            </p>
          </article>
        </div>

        {/* Supporting principles */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ number, title, description, icon: Icon }) => (
            <article
              key={number}
              className="rounded-xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-cyan-700">
                  {number}
                </span>
                <Icon size={22} className="text-cyan-600" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {description}
              </p>

              <a
                href="#contact"
                aria-label={`Discuss ${title}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
              >
                Learn more <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
