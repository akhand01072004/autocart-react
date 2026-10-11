
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  MoveUpRight,
  Wrench,
  BadgeCheck,
  X,
  Images,
} from "lucide-react";

const heroPhotos = [
  
  {
    src: "/assets/img/carousel/garage-1.png",
    title: "SMARTCARE GARAGE",
    category: "SmartCare Garage",
  },
  {
    src: "/assets/img/carousel/garage-2.png",
    title: "Automotive Workshop",
    category: "SmartCare Garage",
  },
  {
    src: "/assets/img/carousel/garage-3.png",
    title: "Vehicle Maintenance",
    category: "SmartCare Garage",
  },
  {
    src: "/assets/img/carousel/training-1.png",
    title: "SMARTCARE TRAINING CENTER",
    category: "Training Center",
  },
  {
    src: "/assets/img/carousel/training-2.png",
    title: "Practical Learning",
    category: "Training Center",
  },
  {
    src: "/assets/img/carousel/training-3.png",
    title: "Skills Development",
    category: "Training Center",
  },
];

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const currentPhoto = heroPhotos[activePhoto];

  const nextPhoto = () => {
    setActivePhoto((current) => (current + 1) % heroPhotos.length);
  };

  const previousPhoto = () => {
    setActivePhoto(
      (current) => (current - 1 + heroPhotos.length) % heroPhotos.length
    );
  };

  // Automatically change images every 4 seconds.
  useEffect(() => {
    if (galleryOpen) return;

    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % heroPhotos.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [galleryOpen]);

  // Full-screen gallery keyboard controls and scroll locking.
  useEffect(() => {
    if (!galleryOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setGalleryOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setActivePhoto(
          (current) => (current - 1 + heroPhotos.length) % heroPhotos.length
        );
      }

      if (event.key === "ArrowRight") {
        setActivePhoto((current) => (current + 1) % heroPhotos.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryOpen]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#F3F9FC]"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,145,178,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to right, transparent, black 75%)",
        }}
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        {/* Hero text — unchanged */}
        <div>
          <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 sm:text-sm">
            <span className="h-[2px] w-9 rounded-full bg-cyan-500" />
            Nourishing the Nation
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#102D40] sm:text-5xl lg:text-6xl xl:text-7xl">
            Moving the automotive industry{" "}
            <span className="text-cyan-600">forward.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Integrated automotive services, business opportunities
            and skill development — built around a smarter service
            experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-cyan-600 px-6 font-semibold text-white shadow-lg shadow-cyan-700/15 transition hover:-translate-y-0.5 hover:bg-cyan-700"
            >
              Explore our services
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700"
            >
              Discover AUTOCART
            </a>
          </div>

          {/* Trust statement — unchanged */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
              <BadgeCheck size={23} />
            </div>

            <div>
              <p className="font-bold text-[#102D40]">
                One connected ecosystem
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Services · Support · Skills · Partnerships
              </p>
            </div>
          </div>
        </div>

        {/* Hero image carousel */}
        <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
          <div className="group relative overflow-hidden rounded-2xl rounded-br-[72px] bg-slate-200 shadow-2xl shadow-slate-900/15">
            {/* Six photos */}
            {heroPhotos.map((photo, index) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={`${photo.category} - ${photo.title}`}
                className={`${
                  index === 0 ? "relative" : "absolute inset-0"
                } h-[340px] w-full object-cover transition-opacity duration-700 sm:h-[440px] lg:h-[500px] ${
                  activePhoto === index ? "opacity-100" : "opacity-0"
                }`}
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}

            {/* Image gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071D2B]/90 via-transparent to-transparent" />

            {/* Image caption */}
            <div className="absolute bottom-8 left-7 right-7 z-10 sm:bottom-10 sm:left-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                {currentPhoto.category}
              </p>

              <h2 className="max-w-sm text-2xl font-bold leading-tight text-white sm:text-3xl">
                {currentPhoto.title}
              </h2>

              {/* Clickable dots */}
              <div className="mt-5 flex items-center gap-2">
                {heroPhotos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setActivePhoto(index)}
                    aria-label={`Show photo ${index + 1}: ${photo.title}`}
                    aria-pressed={activePhoto === index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activePhoto === index
                        ? "w-8 bg-cyan-400"
                        : "w-2.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}

                <span className="ml-auto text-xs font-semibold text-white">
                  {String(activePhoto + 1).padStart(2, "0")} / 06
                </span>
              </div>

              {/* View all photos */}
              {/* <button
                type="button"
                onClick={() => setGalleryOpen(true)}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-cyan-600"
              >
                <Images size={17} />
                View All Photos
                <MoveUpRight size={17} />
              </button> */}
            </div>

            {/* Previous photo */}
            <button
              type="button"
              onClick={previousPhoto}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/50 text-white transition hover:bg-cyan-600 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Next photo */}
            <button
              type="button"
              onClick={nextPhoto}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/50 text-white transition hover:bg-cyan-600 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Floating feature card — unchanged */}
          {/* <div className="relative mx-auto mt-4 flex max-w-sm items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-xl sm:absolute sm:-bottom-6 sm:-left-8 sm:mx-0 sm:mt-0 sm:max-w-none">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
              <Wrench size={22} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-bold text-slate-900">
                Built around service
              </p>
              <p className="mt-1 text-sm text-slate-500">
                People, process &amp; progress
              </p>
            </div>

            <MoveUpRight className="shrink-0 text-cyan-600" size={20} />
          </div> */}

          {/* Decorative dots — unchanged */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-4 -z-10 hidden h-28 w-28 rounded-2xl sm:block"
            style={{
              backgroundImage:
                "radial-gradient(#06A6C8 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
            }}
          />
        </div>
      </div>

      {/* Full-screen photo gallery */}
      {galleryOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="AUTOCART photo gallery"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setGalleryOpen(false);
            }
          }}
        >
          <div className="flex max-h-full w-full max-w-6xl flex-col">
            {/* Gallery header */}
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  AUTOCART Gallery
                </p>
                <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  {currentPhoto.category}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setGalleryOpen(false)}
                aria-label="Close gallery"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-red-500"
              >
                <X size={22} />
              </button>
            </div>

            {/* Main gallery image */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-black">
              <img
                key={currentPhoto.src}
                src={currentPhoto.src}
                alt={currentPhoto.title}
                className="max-h-[65vh] w-full object-contain"
              />

              <button
                type="button"
                onClick={previousPhoto}
                aria-label="Previous gallery photo"
                className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-cyan-600 sm:left-5 sm:h-14 sm:w-14"
              >
                <ArrowLeft size={24} />
              </button>

              <button
                type="button"
                onClick={nextPhoto}
                aria-label="Next gallery photo"
                className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-cyan-600 sm:right-5 sm:h-14 sm:w-14"
              >
                <ArrowRight size={24} />
              </button>
            </div>

            {/* Gallery details */}
            <div className="mt-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white">
                    {currentPhoto.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {currentPhoto.category}
                  </p>
                </div>

                <span className="shrink-0 text-sm text-slate-300">
                  {activePhoto + 1} / {heroPhotos.length}
                </span>
              </div>

              {/* Gallery thumbnails */}
              <div className="mt-4 grid grid-cols-6 gap-2">
                {heroPhotos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setActivePhoto(index)}
                    aria-label={`Open ${photo.title}`}
                    aria-pressed={activePhoto === index}
                    className={`overflow-hidden rounded-lg border-2 transition ${
                      activePhoto === index
                        ? "border-cyan-400 opacity-100"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
