"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const images = [
  {
    src: "/gallery/clubhouse-pool.png",
    alt: "Eco Vista clubhouse with a resort-style swimming pool and landscaped gardens",
    title: "Clubhouse & Pool",
    category: "Leisure & Gathering",
    description:
      "A welcoming community hub with a pool, inviting lounges and room to unwind together.",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    src: "/gallery/clubhouse-terrace.png",
    alt: "Eco Vista clubhouse terrace opening onto landscaped gardens",
    title: "An Open-Air Welcome",
    category: "Clubhouse Living",
    description:
      "Light-filled social spaces, open terraces and garden views make time together feel effortless.",
    className: "md:col-span-5",
  },
  {
    src: "/gallery/pickleball-courts.jpeg",
    alt: "Eco Vista outdoor pickleball and badminton courts surrounded by greenery",
    title: "Play, Rally, Repeat",
    category: "Sports & Recreation",
    description:
      "Dedicated courts bring a little friendly competition and active time outdoors into the neighbourhood.",
    className: "md:col-span-5",
  },
  {
    src: "/gallery/community-hall-gathering.png",
    alt: "Eco Vista community hall prepared for a gathering with landscaped outdoor seating",
    title: "Moments Together",
    category: "Community Hall",
    description:
      "A gracious setting for celebrations, shared occasions and the moments worth remembering.",
    className: "md:col-span-4",
  },
  {
    src: "/gallery/fitness-center.jpeg",
    alt: "Bright Eco Vista gym with strength and cardio equipment",
    title: "Wellness, Every Day",
    category: "Fitness & Wellbeing",
    description:
      "A bright, thoughtfully equipped gym makes it easier to keep movement close to home.",
    className: "md:col-span-4",
  },
  {
    src: "/gallery/walking-jogging-track.png",
    alt: "Eco Vista walking and jogging track winding through landscaped greenery",
    title: "A Greener Pace",
    category: "Outdoor Living",
    description:
      "Take an easy stroll or pick up the pace along a green route made for everyday movement.",
    className: "md:col-span-4",
  },
  {
    src: "/gallery/clubhouse-poolside.png",
    alt: "Eco Vista clubhouse and pool framed by tropical landscaping at dusk",
    title: "Poolside Calm",
    category: "Clubhouse & Pool",
    description:
      "Landscaped poolside spaces offer a relaxed setting to pause, recharge and enjoy the day.",
    className: "md:col-span-6",
  },
  {
    src: "/gallery/community-hall-evening.png",
    alt: "Warmly lit Eco Vista community hall surrounded by gardens",
    title: "Gather in Good Company",
    category: "Community Hall",
    description:
      "Welcoming indoor and outdoor spaces bring neighbours together for life’s special occasions.",
    className: "md:col-span-6",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#f4efdf] px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >
        {/* Decorative line */}
        <div className="absolute left-0 top-0 h-px w-full bg-[#123d2b]/15" />

        <div className="mx-auto max-w-[1500px]">
          {/* Header */}
          <div className="mb-16 grid gap-10 md:grid-cols-12 md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-[#c9a45c]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#123d2b]/60">
                  06 — Gallery
                </span>
              </div>

              <h2 className="max-w-3xl font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.04em] text-[#123d2b]">
                A glimpse of
                <br />
                <span className="italic text-[#123d2b]/70">
                  life at EcoVista.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-4 md:col-start-9"
            >
              <p className="max-w-md text-sm leading-7 text-[#123d2b]/65">
                Spaces shaped around greenery, community and a slower rhythm of
                living. Explore the visual character envisioned for EcoVista.
              </p>
            </motion.div>
          </div>

          {/* Gallery */}
          <div className="grid auto-rows-[280px] grid-cols-1 gap-4 sm:auto-rows-[320px] md:grid-cols-12 md:auto-rows-[240px]">
            {images.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(index)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.07,
                }}
                className={`group relative overflow-hidden rounded-[20px] text-left ring-1 ring-[#123d2b]/10 ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d14]/90 via-[#071d14]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Title only; details are shown in the lightbox. */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 sm:inset-x-6 sm:bottom-6">
                  <h3 className="max-w-[85%] font-serif text-2xl leading-tight text-white md:text-3xl">
                    {image.title}
                  </h3>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/5 text-white transition-all duration-300 group-hover:border-[#d2af68] group-hover:bg-[#d2af68] group-hover:text-[#123d2b]">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${images[selectedImage].title} gallery image`}
            className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-[#071d14]/95 p-3 backdrop-blur-sm sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[#071d14]/70 text-white backdrop-blur-sm transition-colors hover:border-[#d2af68] hover:text-[#d2af68] md:right-8 md:top-8"
              aria-label="Close gallery"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative flex h-[min(92dvh,880px)] max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0c2d20] shadow-[0_28px_100px_rgba(0,0,0,0.55)] sm:max-h-[calc(100dvh-3rem)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-[180px] w-full flex-1 bg-black/20">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1152px"
                  className="object-contain p-2 sm:p-4"
                />
              </div>

              <div className="max-h-[30dvh] shrink-0 overflow-y-auto border-t border-[#DFC587]/20 px-5 py-4 sm:px-8 sm:py-6">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#DFC587] sm:text-xs">
                  {images[selectedImage].category}
                </p>

                <h3 className="font-serif text-2xl leading-tight text-white sm:text-3xl md:text-4xl">
                  {images[selectedImage].title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/80 sm:mt-3 sm:text-base sm:leading-7 md:text-lg">
                  {images[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
