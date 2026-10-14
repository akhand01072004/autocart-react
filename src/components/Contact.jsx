
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const PHONE_NUMBER = "7651817123";
const EMAIL = "hr@autocart.co.in";

function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hello AUTOCART, I would like to enquire about your services."
  );

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F3F9FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Contact Us
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#102D40] sm:text-4xl lg:text-5xl">
            How Can We <span className="text-cyan-600">Help?</span>
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Connect with AUTOCART for automotive services,
            training opportunities, and business enquiries.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Office addresses */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-9">
            <h3 className="text-2xl font-bold text-[#102D40]">
              Our Offices
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Find our office locations and contact details.
            </p>

            {/* Head Office */}
            <div className="mt-8 flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <MapPin size={23} />
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  Head Office
                </h4>
                <p className="mt-2 leading-7 text-slate-600">
                  Sec - 03, Jaunpur,
                  <br />
                  Uttar Pradesh, India - 222002
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sector+03+Jaunpur+Uttar+Pradesh+222002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                >
                  View on Maps <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className="my-7 border-t border-slate-100" />

            {/* Regional Office */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <MapPin size={23} />
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  Regional Office
                </h4>
                <p className="mt-2 leading-7 text-slate-600">
                  Vikrant Khand, Lucknow,
                  <br />
                  Uttar Pradesh, India - 226010
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vikrant+Khand+Lucknow+226010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                >
                  View on Maps <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="mt-8 rounded-2xl bg-[#F3F9FC] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700">
                  <Mail size={21} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">
                    Email Enquiries
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all text-sm text-cyan-700 hover:underline sm:text-base"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact actions */}
          <div className="flex flex-col justify-center rounded-3xl bg-[#102D40] p-6 text-white shadow-xl sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Get in touch
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Let's start a conversation.
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Choose the contact method that works best for you.
              Our team is ready to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              {/* 1. Call Now */}
              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 text-slate-900 transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <Phone size={23} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-bold">
                    Call Now
                  </span>
                  <span className="mt-1 block text-sm text-slate-500">
                    Talk to us
                  </span>
                </span>

                <ArrowUpRight size={20} className="text-cyan-700" />
              </a>

              {/* 2. WhatsApp */}
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white p-4 text-slate-900 transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <MessageCircle size={23} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-bold">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm text-slate-500">
                    Chat with our team
                  </span>
                </span>

                <ArrowUpRight size={20} className="text-green-700" />
              </a>

              {/* 3. Email Enquiry */}
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("AUTOCART Enquiry")}`}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 text-slate-900 transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Mail size={23} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-bold">
                    Email Enquiry
                  </span>
                  <span className="mt-1 block break-all text-sm text-slate-500">
                    {EMAIL}
                  </span>
                </span>

                <ArrowUpRight size={20} className="text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
