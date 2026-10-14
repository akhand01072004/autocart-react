
import { useState } from "react";
import { Phone, X, MessageCircle, Headset } from "lucide-react";

const PHONE_NUMBER = "919795340534"; // Replace with your business number if needed

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello AUTOCART, I would like to know more about your services."
  );

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {/* Contact popup */}
      {isOpen && (
        <div className="mb-1 w-[min(300px,calc(100vw-40px))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20">
          <div className="bg-[#102D40] p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <Headset size={23} />
              </div>

              <div>
                <h3 className="font-bold">Contact AUTOCART</h3>
                <p className="mt-1 text-xs text-slate-300">
                  How can we help you?
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 p-4">
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-cyan-300 hover:bg-cyan-50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                <Phone size={21} />
              </span>

              <span>
                <span className="block font-semibold text-slate-900">
                  Call Us
                </span>
                <span className="mt-1 block text-xs text-slate-500">
                  Speak with our team
                </span>
              </span>
            </a>

            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-green-300 hover:bg-green-50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
                <MessageCircle size={21} />
              </span>

              <span>
                <span className="block font-semibold text-slate-900">
                  WhatsApp Us
                </span>
                <span className="mt-1 block text-xs text-slate-500">
                  Chat with our team
                </span>
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
        className="flex h-14 items-center gap-3 rounded-full bg-cyan-600 px-5 text-white shadow-xl shadow-cyan-900/25 transition duration-300 hover:-translate-y-1 hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200"
      >
        {isOpen ? <X size={23} /> : <Phone size={22} />}
        <span className="text-sm font-bold">
          {isOpen ? "Close" : "Call / WhatsApp"}
        </span>
      </button>
    </div>
  );
}
