
import {
  Compass,
  Wrench,
  GraduationCap,
  Handshake,
  ArrowRight,
} from "lucide-react";

const journeySteps = [
  {
    number: "01",
    icon: Compass,
    title: "Understanding Industry Needs",
    description:
      "Recognising the needs of automotive customers, workshops, and businesses to identify opportunities for better service solutions.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Building Service Solutions",
    description:
      "Focusing on automotive services and support designed around vehicle maintenance, customer experience, and business requirements.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Developing Skills",
    description:
      "Emphasising training and workforce development to support skilled professionals across the automotive ecosystem.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Growing Through Collaboration",
    description:
      "Encouraging partnerships and collaboration to explore new opportunities in automotive services and mobility.",
  },
];

function OurJourney() {
  return (
    <section
      id="our-journey"
      className="scroll-mt-24 overflow-hidden bg-slate-50 px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Our Journey
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Moving Forward,{" "}
            <span className="text-cyan-600">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Our journey reflects a focus on automotive services, skills,
            customer support, and collaboration to help build a stronger
            mobility ecosystem.
          </p>
        </div>

        {/* Journey cards */}
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-2xl font-bold text-slate-200 transition-colors group-hover:text-cyan-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold leading-snug text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-cyan-700">
                  <span className="h-1 w-8 rounded-full bg-cyan-500 transition-all group-hover:w-12" />
                  <ArrowRight size={16} />
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 rounded-2xl bg-slate-950 px-7 py-9 text-center sm:px-12 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            The Road Ahead
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-2xl font-bold leading-snug text-white sm:text-3xl">
            Creating better connections between automotive services,
            people, and opportunities.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default OurJourney;
