
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

const milestones = [
  {
    title: "SMARTCARE Training Center",
    category: "Training & Skill Development",
    description:
      "Highlights from the training center inauguration and the development of automotive skills.",
    image: "/assets/img/training-inauguration.jpeg",
    alt: "SMARTCARE Training Center inauguration",
  },
  {
    title: "SMARTCARE Garage",
    category: "Automotive Services",
    description:
      "Moments from the garage inauguration and the growth of automotive service operations.",
    image: "/assets/img/garage-inauguration.png",
    alt: "SMARTCARE Garage inauguration",
  },
];

function Milestones() {
  return (
    <section
      id="milestones"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Our Milestones
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Moments That <span className="text-cyan-600">Move Us Forward</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A look at the people, places, and milestones connected with
            AUTOCART's automotive services and training initiatives.
          </p>
        </div>

        {/* Photo cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {milestones.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 pt-16">
                  <span className="rounded-full bg-cyan-500 px-3 py-1.5 text-xs font-bold text-white">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition hover:gap-3 hover:text-blue-950"
                >
                  Enquire with us
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Milestones;
