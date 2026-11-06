"use client";

import Image from "next/image";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

/* ---------------------------------------------------------------
   BRAND TOKENS (Eco Vista colour palette)
   Primary Green   #082F27   Header / Hero
   Secondary Green #174C3C   Sections / Cards
   Champagne Gold  #C9A45C   Buttons / Highlights
   Light Gold      #DFC587   Accents / Icons
   Warm Ivory      #F7F4EC   Background
   Warm White      #FFFFFF   Text on dark
---------------------------------------------------------------- */

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85";

const ease = [0.22, 1, 0.36, 1] as const;
const bookingScript = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  const reduce = useReducedMotion();

  // One orchestrated page-load sequence (skipped for reduced motion)
  const enter = (delay: number, y = 28) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#082F27]"
    >
      {/* =====================================================
          FULL-BLEED IMAGE (slow settle on load)
      ===================================================== */}
      <motion.div
        className="absolute inset-0"
        {...(reduce
          ? {}
          : {
              initial: { scale: 1.1 },
              animate: { scale: 1 },
              transition: { duration: 2.8, ease },
            })}
      >
        <Image
          src={heroImage}
          alt="Modern Eco Vista home surrounded by landscaped greenery at dusk"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* =====================================================
          OVERLAYS
      ===================================================== */}

      {/* Bottom-up green wash: carries the headline */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#082F27] via-[#082F27]/60 to-[#082F27]/10" />

      {/* Left-side wash for readability, image stays vivid on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#082F27]/80 via-[#082F27]/30 to-transparent" />

      {/* Top wash: keeps the transparent navbar legible */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#082F27]/75 to-transparent" />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-6 pb-12 pt-40 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16">
        <div>
          {/* ---------- TEXT ---------- */}
          <div>
            <motion.p
              {...enter(0.15, 20)}
              className={`${bookingScript.className} mb-1 text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[0.95] text-[#DFC587] drop-shadow-[0_4px_18px_rgba(0,0,0,0.3)]`}
              aria-hidden="true"
            >
              Booking Now
            </motion.p>

            <motion.div {...enter(0.2, 16)} className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#C9A45C] sm:w-14" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#DFC587] sm:text-xs">
                Eco Vista Township
              </span>
            </motion.div>

            <motion.h1
              {...enter(0.3, 50)}
              className="mt-6 font-serif text-[clamp(2.6rem,6.2vw,5.75rem)] font-medium leading-[0.96] tracking-[-0.04em] text-white"
            >
              A greener way
              <span className="block text-[#DFC587]">to come home.</span>
            </motion.h1>

            <motion.p
              {...enter(0.55)}
              className="mt-7 max-w-[480px] text-base leading-8 text-white/85 sm:text-lg"
            >
              More than a piece of land. A place thoughtfully shaped around
              nature, community and beautiful living.
            </motion.p>

          </div>
        </div>

        {/* ---------- SCROLL CUE ---------- */}
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.8, delay: 1.3 },
              })}
          className="mt-12 hidden items-center gap-4 border-t border-white/15 pt-5 lg:flex"
        >
          <Link
            href="#about"
            aria-label="Scroll to the overview"
            className="group flex items-center gap-3 text-white/70 transition-colors duration-300 hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors duration-300 group-hover:border-[#C9A45C]">
              <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
              Scroll to explore
            </span>
          </Link>

          <span className="ml-auto text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
            Where land becomes legacy
          </span>
        </motion.div>
      </div>
    </section>
  );
}
