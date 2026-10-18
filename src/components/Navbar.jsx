
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Gallery", href: "#gallery" },
  { label: "Mission & Vision", href: "#mission-vision" },
  { label: "Our Journey", href: "#our-journey" },
  { label: "Our Future", href: "#our-future" },
];


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[88px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">

        {/* Official AUTOCART logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="AUTOCART home"
          className="shrink-0 transition-transform duration-200 hover:scale-[1.03]"
        >
          <img
            src="/autocart-logo.jpg"
            alt="AUTOCART"
            className="h-auto w-[92px] object-contain sm:w-[105px]"
          />
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-x-5 xl:gap-x-7 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative whitespace-nowrap py-3 text-[14px] font-medium text-slate-700 transition-colors duration-200 hover:text-cyan-700 xl:text-[15px]"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-cyan-500 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}

          <a
            href="#contact"
            className="ml-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-cyan-600 px-5 text-sm font-semibold text-white shadow-sm shadow-cyan-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            Contact
            <ArrowUpRight size={17} />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile and tablet menu */}
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="overflow-hidden"
          inert={!menuOpen}
        >
          <div className="border-t border-slate-100 bg-white px-5 py-3 sm:px-8">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                style={{ transitionDelay: menuOpen ? `${index * 25}ms` : "0ms" }}
                className="flex min-h-12 items-center justify-between border-b border-slate-100 py-3 text-[15px] font-medium text-slate-700 transition-colors hover:text-cyan-700 last:border-b-0"
              >
                {link.label}
                <ArrowUpRight size={16} className="text-slate-400" />
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-600 px-5 font-semibold text-white transition hover:bg-cyan-700"
            >
              Let's talk
              <ArrowUpRight size={17} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
