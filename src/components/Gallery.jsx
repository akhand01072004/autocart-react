
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  Store,
  GraduationCap,
  Award,
  X,
} from "lucide-react";

const gallerySections = [
  {
    id: "franchise",
    number: "01",
    title: "Franchise",
    subtitle: "GROW WITH AUTOCART",
    description:
      "Explore our franchise network, workshop setups, and opportunities to grow with the AUTOCART ecosystem.",
    icon: Store,
    images: [
        {
        src: "/assets/img/gallery/franchise-0.jpeg",
        alt: "AUTOCART franchise workshop",
      },
      {
        src: "/assets/img/gallery/franchise-1.jpeg",
        alt: "AUTOCART franchise workshop",
      },
      {
        src: "/assets/img/gallery/franchise-2.jpeg",
        alt: "Automotive franchise setup",
      },
      {
        src: "/assets/img/gallery/franchise-3.jpeg",
        alt: "Automotive service centre",
      },
      {
        src: "/assets/img/gallery/franchise-4.jpeg",
        alt: "Automotive service centre",
      },
      {
        src: "/assets/img/gallery/franchise-5.jpeg",
        alt: "Automotive service centre",
      },
      {
        src: "/assets/img/gallery/franchise-6.jpeg",
        alt: "Automotive service centre",
      },
      {
        src: "/assets/img/gallery/franchise-7.jpeg",
        alt: "Automotive service centre",
      },
      {
        src: "/assets/img/gallery/franchise-8.jpeg",
        alt: "Automotive service centre",
      },
      {
        src: "/assets/img/gallery/franchise-9.jpeg",
        alt: "Automotive service centre",
      },
      {
        src: "/assets/img/gallery/franchise-10.jpeg",
        alt: "Automotive service centre",
      },
      {
        src: "/assets/img/gallery/franchise-11.jpeg",
        alt: "Automotive service centre",
      },
      {
        src: "/assets/img/gallery/franchise-12.jpeg",
        alt: "Automotive service centre",
      },
    //   {
    //     src: "/assets/img/gallery/franchise-13.jpeg",
    //     alt: "Automotive service centre",
    //   },
      {
        src: "/assets/img/gallery/franchise-14.jpeg",
        alt: "Automotive service centre",
      },
    ],
  },
  {
    id: "training",
    number: "02",
    title: "Training",
    subtitle: "LEARN BY DOING",
    description:
      "See practical automotive training, hands-on workshop sessions, and skill development in action.",
    icon: GraduationCap,
    images: [
      {
        src: "/assets/img/gallery/training-1.jpeg",
        alt: "Automotive practical training",
      },
      {
        src: "/assets/img/gallery/training-2.jpeg",
        alt: "Students learning automotive skills",
      },
      {
        src: "/assets/img/gallery/training-3.jpeg",
        alt: "Automotive workshop training",
      },
      {
        src: "/assets/img/gallery/training-4.jpeg",
        alt: "Automotive workshop training",
      },
      {
        src: "/assets/img/gallery/training-5.jpeg",
        alt: "Automotive workshop training",
      },
      {
        src: "/assets/img/gallery/training-6.jpeg",
        alt: "Automotive workshop training",
      },
      {
        src: "/assets/img/gallery/training-7.jpeg",
        alt: "Automotive workshop training",
      },
      
      
    ],
  },
  {
    id: "certification",
    number: "03",
    title: "Certification",
    subtitle: "SKILLS THAT STAND OUT",
    description:
      "Discover certification ceremonies, learner achievements, and milestones from our training programmes.",
    icon: Award,
    images: [
      {
        src: "/assets/img/gallery/certification-1.jpeg",
        alt: "Automotive training certificate",
      },
      {
        src: "/assets/img/gallery/certification-2.jpeg",
        alt: "Certificate presentation",
      },
      {
        src: "/assets/img/gallery/certification-3.jpeg",
        alt: "Training programme achievement",
      },
      {
        src: "/assets/img/gallery/certification-4.jpeg",
        alt: "Training programme achievement",
      },
      {
        src: "/assets/img/gallery/certification-5.jpeg",
        alt: "Training programme achievement",
      },
    ],
  },
];

function GalleryCarousel({ section, onOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const images = section.images;
  const activeImage = images[activeIndex];

  const previous = () => {
    setActiveIndex((index) =>
      index === 0 ? images.length - 1 : index - 1
    );
  };

  const next = () => {
    setActiveIndex((index) =>
      index === images.length - 1 ? 0 : index + 1
    );
  };

  useEffect(() => {
    if (paused || images.length < 2) return;

    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, images.length]);

  return (
    <article
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* Image carousel */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 sm:aspect-[16/10]">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
              index === activeIndex
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-slate-950/50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
          {section.subtitle}
        </div>

        <button
          type="button"
          onClick={() => onOpen(section, activeIndex)}
          aria-label={`View ${section.title} image fullscreen`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-slate-950/50 text-white backdrop-blur-md transition hover:bg-cyan-600"
        >
          <Expand size={18} />
        </button>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-cyan-300">
              {section.number} / 03
            </p>
            <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              {section.title}
            </h3>
          </div>

          <p className="shrink-0 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </p>
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={previous}
              aria-label={`Previous ${section.title} image`}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-950/50 text-white backdrop-blur-md transition hover:bg-cyan-600"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label={`Next ${section.title} image`}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-950/50 text-white backdrop-blur-md transition hover:bg-cyan-600"
            >
              <ArrowRight size={19} />
            </button>
          </>
        )}
      </div>

      {/* Description and dots */}
      <div className="p-5 sm:p-6">
        <p className="text-sm leading-7 text-slate-600">
          {section.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${section.title} image ${index + 1}`}
                aria-pressed={index === activeIndex}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-cyan-600"
                    : "w-2 bg-slate-300 hover:bg-cyan-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => onOpen(section, activeIndex)}
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition hover:text-cyan-900"
          >
            View gallery <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const closeLightbox = () => setLightbox(null);

  const changeLightboxImage = (direction) => {
    setLightbox((current) => {
      if (!current) return null;

      const images = current.section.images;
      const index =
        (current.index + direction + images.length) % images.length;

      return { ...current, index };
    });
  };

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") changeLightboxImage(-1);
      if (event.key === "ArrowRight") changeLightboxImage(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const openLightbox = (section, index) => {
    setLightbox({ section, index });
  };

  const currentLightboxImage = lightbox
    ? lightbox.section.images[lightbox.index]
    : null;

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#F5F9FC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Explore Our Gallery
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Our Work.{" "}
              <span className="text-cyan-600">Our Impact.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Discover our franchise network, practical training
              experiences, and certification milestones through
              the AUTOCART journey.
            </p>
          </div>

          {/* Three independent carousels */}
          <div className="grid items-start gap-7 lg:grid-cols-3">
            {gallerySections.map((section) => (
              <GalleryCarousel
                key={section.id}
                section={section}
                onOpen={openLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen image viewer */}
      {lightbox && currentLightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.section.title} gallery`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={23} />
          </button>

          <button
            type="button"
            onClick={() => changeLightboxImage(-1)}
            aria-label="Previous image"
            className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan-600 sm:left-6 sm:h-12 sm:w-12"
          >
            <ArrowLeft size={22} />
          </button>

          <div className="flex max-h-full w-full max-w-6xl flex-col items-center gap-4">
            <img
              src={currentLightboxImage.src}
              alt={currentLightboxImage.alt}
              className="max-h-[75vh] w-full rounded-xl object-contain"
            />

            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                {lightbox.section.title}
              </p>
              <p className="mt-2 text-sm text-white/70">
                Image {lightbox.index + 1} of{" "}
                {lightbox.section.images.length}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {lightbox.section.images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() =>
                    setLightbox({ ...lightbox, index })
                  }
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={index === lightbox.index}
                  className={`h-14 w-20 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${
                    index === lightbox.index
                      ? "border-cyan-400"
                      : "border-white/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => changeLightboxImage(1)}
            aria-label="Next image"
            className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan-600 sm:right-6 sm:h-12 sm:w-12"
          >
            <ArrowRight size={22} />
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;
