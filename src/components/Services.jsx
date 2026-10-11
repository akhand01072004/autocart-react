
import {
  Bike,
  Headset,
  Store,
  UserRoundCog,
  MonitorCheck,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Automotive Services",
    description:
      "Vehicle maintenance, repairs, diagnostics, and service support to help keep vehicles in top condition.",
    icon: Bike,
  },
  {
    number: "02",
    title: "Sales & After-Sales Support",
    description:
      "Vehicle selection assistance, servicing, AMC, and warranty support focused on long-term customer value.",
    icon: Headset,
  },
  {
    number: "03",
    title: "Own Franchise Startup",
    description:
      "Explore automotive franchise opportunities with business model support and guidance from AUTOCART.",
    icon: Store,
  },
  {
    number: "04",
    title: "Trained Manpower Deployment",
    description:
      "Connecting workshops, dealerships, and service centres with skilled automotive professionals.",
    icon: UserRoundCog,
  },
  {
    number: "05",
    title: "Skill Development & Trainings",
    description:
      "Developing automotive skills through practical training and technician development programmes.",
    icon: MonitorCheck,
  },
  {
    number: "06",
    title: "Business Collaborations",
    description:
      "Building partnerships across automotive services, technology integration, logistics, and training.",
    icon: Handshake,
  },
];

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Complete Solutions for{" "}
            <span className="text-cyan-600">Automotive Businesses</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            AUTOCART brings together automotive services, sales support,
            workforce development, training, and business collaboration
            to support a smarter mobility ecosystem.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/10 sm:p-8"
              >
                {/* Decorative accent */}
                <div className="absolute right-0 top-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-700 transition-all duration-300 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-wider text-slate-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-cyan-800">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  aria-label={`Enquire about ${service.title}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition-all hover:text-blue-950 group-hover:gap-3"
                >
                  Explore Service
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>

        {/* Bottom call to action */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-slate-950 p-7 sm:flex-row sm:p-9">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Looking for the right automotive solution?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Connect with AUTOCART to discuss your requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
