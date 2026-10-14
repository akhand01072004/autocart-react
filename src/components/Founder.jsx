
import { ArrowUpRight, Quote } from "lucide-react";

function Founder() {
  return (
    <section
      id="founder"
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Leadership
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Meet Our{" "}
            <span className="text-cyan-600">
              Founder &amp; CEO
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            The vision and leadership behind AUTOCART's
            journey in the automotive industry.
          </p>
        </div>

        {/* Founder profile */}
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-0">
          {/* Larger image column */}
          <div className="relative min-w-0 p-3 sm:p-5 lg:p-6">
            <div className="absolute left-0 top-0 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-cyan-500" />

            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
              <img
                src="/assets/img/Founder.png"
                alt="Utsav Kumar Upadhyay, Founder and CEO of AUTOCART"
                className="block h-auto min-h-[320px] w-full object-contain object-center sm:min-h-[400px] lg:min-h-[520px]"
                loading="lazy"
              />

              {/* Image caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  
                </p>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  Utsav Kumar Upadhyay
                </h3>

                <p className="mt-2 text-sm text-white font-bold">
                  FOUNDER &amp; CEO - AUTOCART
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 h-20 w-20 rounded-br-3xl border-b-4 border-r-4 border-cyan-500" />
          </div>

          {/* Biography column */}
          <div className="min-w-0 px-6 pb-8 sm:px-8 sm:pb-10 lg:px-8 lg:py-12 xl:px-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <Quote size={25} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 sm:text-sm">
              A Vision for the Future
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
              Building connections between people, services,
              and opportunities.
            </h3>

            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Utsav Kumar Upadhyay leads AUTOCART with a
                focus on innovation, collaboration, and
                opportunities across the automotive industry.
              </p>

              <p>
                As Founder &amp; CEO, he works toward developing
                an ecosystem that brings together automotive
                services, workforce development, training,
                and business partnerships.
              </p>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-7">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-300 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-cyan-600 sm:px-6"
              >
                Connect With AUTOCART
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
