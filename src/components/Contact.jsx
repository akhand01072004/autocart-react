
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Get In Touch
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Let's Build Something{" "}
            <span className="text-cyan-600">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Have a question about automotive services, training,
            franchise opportunities, or business collaboration?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-5">
          {/* Left panel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-800 p-8 text-white sm:p-10 lg:col-span-2 lg:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-white/5" />
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border-[35px] border-cyan-300/10" />

            <div className="relative">
              <h3 className="text-2xl font-bold">Contact AUTOCART</h3>

              <p className="mt-4 text-sm leading-7 text-blue-100">
                Tell us what you are looking for, and let's explore
                how we can work together.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cyan-200">
                      Email
                    </p>
                    <p className="mt-1 text-sm text-white/90">
                      Contact us by email
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cyan-200">
                      Phone
                    </p>
                    <p className="mt-1 text-sm text-white/90">
                      Speak with our team
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cyan-200">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-white/90">
                      Connect with AUTOCART
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/15 pt-6">
                <p className="text-sm leading-6 text-blue-100">
                  Interested in a partnership or franchise opportunity?
                  Get in touch with us.
                </p>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="p-8 sm:p-10 lg:col-span-3 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-950">
              How can we help?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Choose the easiest way to start a conversation with us.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-300 hover:bg-cyan-50"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                    <Mail size={21} />
                  </div>
                  <p className="mt-4 font-bold text-slate-900">
                    Email Enquiry
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Send us an email
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-400 transition group-hover:text-cyan-700"
                />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-300 hover:bg-cyan-50"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                    <MessageCircle size={21} />
                  </div>
                  <p className="mt-4 font-bold text-slate-900">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Start a conversation
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-400 transition group-hover:text-cyan-700"
                />
              </a>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h4 className="font-bold text-slate-900">
                Let's discuss your requirements
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Whether you are an individual, workshop, training
                organisation, or business partner, start a conversation
                with AUTOCART.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
