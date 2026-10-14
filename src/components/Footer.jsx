
import {
  Bike,
  Headset,
  Store,
  UserRoundCog,
  MonitorCheck,
  Handshake,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MessageCircle,
  Twitter,
} from "lucide-react";

const services = [
  "Automotive Services",
  "Sales & After-Sales Support",
  "Own Franchise Startup",
  "Trained Manpower Deployment",
  "Skill Development & Trainings",
  "Business Collaborations",
];

const socialLinks = [
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/917651817123",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/autocart.automotive/",
  },
  {
    label: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@autocart.automotive",
  },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/autocartautomotive",
  },
  
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://in.linkedin.com/company/autocart-company",
  },
];

const paymentDetails = [
  ["Bank", "Punjab National Bank"],
  ["Account Type", "Current Account"],
  ["Account Name", "AUTOCART"],
  ["Account No.", "4780002100003124"],
  ["IFSC", "PUNB0478000"],
  ["Branch", "Jaunpur"],
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Company information */}
          <div>
            <a href="#home" aria-label="AUTOCART home">
              <img
                src="/autocart-logo.jpg"
                alt="AUTOCART logo"
                className="h-16 w-auto rounded-sm object-contain"
              />
            </a>

            <p className="mt-6 text-sm leading-7 text-slate-300">
              AUTOCART is an emerging leader in India's automotive
              industry. Founded in 2025 in Jaunpur, Uttar Pradesh.
              We are redefining automotive services through
              innovation, nationwide collaboration, and a commitment
              to excellence.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold">Services</h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400" />

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm leading-6 text-slate-300 transition hover:text-cyan-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-xl font-bold">Contacts</h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400" />

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-cyan-400"
                />
                <p>
                  <strong className="text-white">Address:</strong>{" "}
                  Jaunpur - 222002
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-cyan-400"
                />
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:autocarthr@gmail.com"
                    className="break-all transition hover:text-cyan-400"
                  >
                    autocarthr@gmail.com
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-cyan-400"
                />
                <p>
                  <strong className="text-white">Phone:</strong>{" "}
                  <a
                    href="tel:+917651817123"
                    className="transition hover:text-cyan-400"
                  >
                    +91 7651817123
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Payment information */}
          <div>
            <h3 className="text-xl font-bold">Payment Info</h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400" />

            <dl className="mt-6 space-y-4 text-sm leading-6">
              {paymentDetails.map(([label, value]) => (
                <div key={label}>
                  <dt className="inline font-semibold text-white">
                    {label}:{" "}
                  </dt>
                  <dd className="inline break-words text-slate-300">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Add the original payment QR image here */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold text-slate-200">
                Scan to Pay
              </p>

              <div className="flex h-36 w-36 items-center justify-center rounded-lg bg-white p-2">
                <img
                  src="/assets/img/payment-qr.jpeg"
                  alt="AUTOCART payment QR code"
                  className="h-full w-full object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-slate-300 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            Copyright © {new Date().getFullYear()} AUTOCART.
            All Rights Reserved.
          </p>

          <a
            href="#home"
            className="font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
