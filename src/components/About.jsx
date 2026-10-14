
import {
  ArrowUpRight,
  Wrench,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const divisions = [
  {
    title: "SMARTCARE GARAGE",
    subtitle: "Automotive Service & Maintenance",
    image: "/assets/img/carousel/garage-1.png",
    description:
      "Reliable two-wheeler servicing backed by practical expertise, advanced diagnostics, and customer-focused support.",
    services: [
      "Two-Wheeler Repair & Maintenance",
      "Advanced Diagnostics & Troubleshooting",
      "Professional Customer Support",
    ],
    icon: Wrench,
  },
  {
    title: "SMARTCARE TRAINING CENTER",
    subtitle: "Automotive Skill & Development",
    image: "/assets/img/carousel/training-1.png",
    description:
      "Practical automobile training that combines real workshop experience with the skills needed to prepare for industry opportunities.",
    services: [
      "Practical Automobile Training",
      "Real Workshop Experience",
      "Industry-Ready Skill Development",
    ],
    icon: GraduationCap,
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            About AUTOCART
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Two Divisions.{" "}
            <span className="text-cyan-600">One Vision.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            AUTOCART is an emerging leader in India's automotive
            aftermarket industry. We are committed to enhancing
            automotive service quality through innovation,
            nationwide collaboration, and a commitment to excellence.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-5 py-3 text-sm font-semibold text-cyan-800">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-600" />
            Founded in 2024
          </div>

        </div>

        {/* Core divisions */}
        <div className="grid items-start gap-7 lg:grid-cols-2">
          {divisions.map((division) => {
            const Icon = division.icon;

            return (
              <article
                key={division.title}
                className="group min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Complete image — no cropping */}
                <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-slate-50 sm:min-h-[300px] lg:min-h-[340px]">
                  <img
                    src={division.image}
                    alt={`${division.title} at AUTOCART`}
                    className="block h-auto max-h-[480px] w-full object-contain transition duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Division details */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                      <Icon size={24} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
                        {division.subtitle}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                        {division.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    {division.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      What We Provide
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {division.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base"
                        >
                          <CheckCircle2
                            size={19}
                            className="mt-0.5 shrink-0 text-cyan-600"
                          />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-700 transition hover:text-cyan-900"
                  >
                    Connect with us
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-10 rounded-2xl border border-cyan-100 bg-[#F3F9FC] px-6 py-7 text-center sm:px-10">
          <p className="text-lg font-bold text-[#102D40] sm:text-xl">
            Better automotive services. Stronger skills. A connected industry.
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Bringing automotive care and workforce development together
            under one ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
