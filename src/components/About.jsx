
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
  Clock,
  Building2,
} from "lucide-react";

const PHONE_NUMBER = "919795340534";
const EMAIL = "hr@autocart.co.in";

const offices = [
  {
    title: "Head Office",
    address: [
      "Sec - 03, Jaunpur",
      "Uttar Pradesh, India - 222002",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Sector+03+Jaunpur+Uttar+Pradesh+222002",
  },
  {
    title: "Regional Office",
    address: [
      "Vikrant Khand, Lucknow",
      "Uttar Pradesh, India - 226010",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Vikrant+Khand+Lucknow+226010",
  },
];

export default function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hello AUTOCART, I would like to enquire about your services."
  );

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#F3F9FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 -z-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Contact AUTOCART
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#102D40] sm:text-4xl lg:text-5xl">
            Let's Start a{" "}
            <span className="text-cyan-600">Conversation.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Have a question about our automotive services or
            training programs? We're here to help you connect
            with the right team.
          </p>
        </div>

        {/* Main contact layout */}
        <div className="grid items-stretch gap-7 lg:grid-cols-[1fr_0.9fr]">
          {/* Office information */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                <Building2 size={27} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#102D40] sm:text-2xl">
                  Our Offices
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Find us at our locations
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {offices.map((office, index) => (
                <div
                  key={office.title}
                  className="rounded-2xl border border-slate-200 p-5 transition duration-300 hover:border-cyan-200 hover:bg-cyan-50/40 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                      <MapPin size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-slate-900">
                        {office.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                        {office.address.map((line, lineIndex) => (
                          <span key={line}>
                            {line}
                            {lineIndex < office.address.length - 1 && <br />}
                          </span>
                        ))}
                      </p>

                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition hover:text-cyan-900"
                      >
                        Get Directions
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Email card */}
            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 flex items-center gap-4 rounded-2xl bg-[#F3F9FC] p-5 transition hover:bg-cyan-50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">
                <Mail size={22} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email Enquiries
                </p>
                <p className="mt-1 break-all font-semibold text-[#102D40]">
                  {EMAIL}
                </p>
              </div>

              <ArrowUpRight size={19} className="shrink-0 text-cyan-700" />
            </a>
          </div>

          {/* Contact action panel */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[#102D40] p-6 text-white shadow-2xl shadow-slate-900/15 sm:p-9 lg:p-10">
            {/* Panel decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[35px] border-white/[0.04]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full border-[35px] border-cyan-400/[0.06]"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                We're Here to Help
              </span>

              <h3 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
                How can we help you today?
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Choose your preferred way to contact AUTOCART.
                Whether you need a service, training information,
                or a business enquiry, let's talk.
              </p>

              {/* Contact options */}
              <div className="mt-8 space-y-4">
                {/* Call */}
                <a
                  href={`tel:+${PHONE_NUMBER}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-4 text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-lg sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                    <Phone size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-bold">Call Now</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Talk to our team
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-cyan-700"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-white p-4 text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-lg sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                    <MessageCircle size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-bold">WhatsApp</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Chat with our team
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-green-700"
                  />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("AUTOCART Enquiry")}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-4 text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-lg sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Mail size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-bold">Email Enquiry</p>
                    <p className="mt-1 break-all text-sm text-slate-500">
                      {EMAIL}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-blue-700"
                  />
                </a>
              </div>

              {/* Supporting note */}
              <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-6">
                <Clock size={19} className="mt-0.5 shrink-0 text-cyan-300" />
                <p className="text-sm leading-6 text-slate-300">
                  Reach out through your preferred contact method
                  and let us know how we can assist you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom brand statement */}
        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-slate-500">
            AUTOCART · Automotive Services · Skills · Partnerships
          </p>
        </div>
      </div>
    </section>
  );
}
