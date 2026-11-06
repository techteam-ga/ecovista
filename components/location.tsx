"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Car,
  MapPin,
  Navigation,
  TrainFront,
} from "lucide-react";

const locationImage =
  "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=2200&q=85";
const locationMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Sriram%20Complex%2C%20Hotel%20Mayur%2C%204th%20Floor%2C%20Nawadih%2C%20Hirak%20Road%2C%20next%20to%20Omkar%20Market%2C%20Dhanbad%20828130";

const ease = [0.22, 1, 0.36, 1] as const;

const connections = [
  {
    number: "01",
    title: "Dhanbad",
    subtitle: "Jharkhand",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Rail Connectivity",
    subtitle: "Dhanbad Railway Station",
    icon: TrainFront,
  },
  {
    number: "03",
    title: "Road Connectivity",
    subtitle: "Hirak Road",
    icon: Car,
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#0c2d20] text-[#f5f0df]"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute -right-[220px] top-[100px] h-[650px] w-[650px] rounded-full border border-[#d2af68]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-[140px] top-[180px] h-[480px] w-[480px] rounded-full border border-[#d2af68]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full border border-white/[0.035]"
        aria-hidden="true"
      />

      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 pb-14 pt-24 sm:px-10 sm:pb-20 sm:pt-28 lg:px-16 lg:pb-24 lg:pt-36">
        {/* Section label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#d2af68] sm:w-14" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d2af68] sm:text-[11px]">
              Location
            </span>
          </div>

          <span className="font-serif text-5xl leading-none text-white/10 sm:text-6xl lg:text-7xl">
            04
          </span>
        </motion.div>

        {/* =======================================================
            HEADING
        ======================================================= */}

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.45fr] lg:items-end lg:gap-20">
          <motion.h2
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.95,
              ease,
            }}
            className="font-serif text-[clamp(3.8rem,8vw,8.5rem)] font-medium leading-[0.79] tracking-[-0.045em]"
          >
            Close to the city.
            <br />
            <span className="text-[#d2af68]">Away from the noise.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
          >
            <div className="flex items-center gap-3">
              <Navigation
                size={16}
                strokeWidth={1.3}
                className="text-[#d2af68]"
                aria-hidden="true"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                Dhanbad, Jharkhand
              </span>
            </div>

            <p className="mt-4 max-w-[390px] text-[14px] leading-7 text-white/50 sm:text-[15px] sm:leading-8">
              Find EcoVista at Sriram Complex, Hotel Mayur, on Hirak Road in
              Nawadih, next to Omkar Market.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          LOCATION VISUAL
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className="group relative h-[470px] overflow-hidden sm:h-[580px] lg:h-[650px]"
        >
          {/* Background image */}

          <Image
            src={locationImage}
            alt="Green landscape representing the surroundings of EcoVista"
            fill
            loading="lazy"
            quality={82}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 92vw"
            className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.025]"
          />

          {/* Dark treatment */}

          <div className="absolute inset-0 bg-[#071c13]/55" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071c13] via-[#071c13]/20 to-[#071c13]/40" />

          {/* =====================================================
              MAP-LIKE GRAPHIC
          ===================================================== */}

          <div className="absolute inset-0 opacity-30">
            {/* horizontal lines */}
            <div className="absolute left-0 top-[28%] h-px w-full rotate-[-4deg] bg-white/20" />
            <div className="absolute left-0 top-[49%] h-px w-full rotate-[7deg] bg-white/10" />
            <div className="absolute left-0 top-[68%] h-px w-full rotate-[-2deg] bg-white/15" />

            {/* vertical lines */}
            <div className="absolute left-[28%] top-0 h-full w-px rotate-[7deg] bg-white/10" />
            <div className="absolute left-[58%] top-0 h-full w-px rotate-[-8deg] bg-white/15" />
            <div className="absolute left-[77%] top-0 h-full w-px rotate-[4deg] bg-white/10" />

            {/* route */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1200 650"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M40 520 C210 460, 260 540, 390 430 S620 250, 760 330 S920 460, 1160 170"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="8 9"
              />
            </svg>
          </div>

          {/* =====================================================
              LOCATION PIN
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease,
            }}
            className="absolute left-[52%] top-[47%] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#d2af68]/70 bg-[#123d2b]/80 backdrop-blur-md">
              <MapPin
                size={21}
                strokeWidth={1.4}
                className="text-[#d2af68]"
                aria-hidden="true"
              />

              <span className="absolute inset-[-9px] rounded-full border border-[#d2af68]/20" />

              <span className="absolute inset-[-19px] rounded-full border border-[#d2af68]/10" />
            </div>
          </motion.div>

          {/* =====================================================
              TOP LEFT LABEL
          ===================================================== */}

          <div className="absolute left-6 top-6 sm:left-9 sm:top-9 lg:left-10 lg:top-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d2af68]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Find your place
              </span>
            </div>
          </div>

          {/* =====================================================
              LOCATION NAME
          ===================================================== */}

          <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-9 sm:right-9 lg:bottom-12 lg:left-10 lg:right-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d2af68]">
                  EcoVista Township
                </p>

                <h3 className="mt-2 font-serif text-5xl leading-[0.82] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                  Dhanbad
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/45">
                  Nawadih, Jharkhand
                </p>
              </div>

              <a
                href={locationMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 border border-white/20 bg-[#071c13]/40 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-[#d2af68] hover:bg-[#d2af68] hover:text-[#123d2b]"
              >
                Open in Maps
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* Number */}

          <span className="absolute right-6 top-5 font-serif text-7xl leading-none text-white/10 sm:right-9 sm:top-7 sm:text-8xl lg:right-10 lg:top-8 lg:text-9xl">
            04
          </span>
        </motion.div>
      </div>

      {/* =========================================================
          CONNECTIVITY
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-16 sm:px-10 sm:pb-28 sm:pt-20 lg:px-16 lg:pb-36 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-end lg:gap-20">
          {/* Intro */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d2af68]">
              Connected living
            </p>

            <h3 className="mt-4 font-serif text-4xl leading-[0.9] tracking-[-0.03em] sm:text-5xl">
              Well placed.
              <br />
              <span className="text-[#d2af68]">Well connected.</span>
            </h3>

            <p className="mt-6 max-w-[390px] text-[13px] leading-6 text-white/40 sm:text-sm sm:leading-7">
              EcoVista brings the calm of a greener setting together with
              practical connections to the surrounding city.
            </p>
          </motion.div>

          {/* Connection cards */}

          <div className="grid border-t border-white/10 sm:grid-cols-3 sm:border-l">
            {connections.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="group border-b border-white/10 px-1 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:py-5 lg:px-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm text-[#d2af68]/70">
                      {item.number}
                    </span>

                    <Icon
                      size={17}
                      strokeWidth={1.3}
                      className="text-white/30 transition-colors duration-300 group-hover:text-[#d2af68]"
                      aria-hidden="true"
                    />
                  </div>

                  <h4 className="mt-8 font-serif text-2xl leading-none">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-white/30">
                    {item.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
