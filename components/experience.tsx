"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Construction,
  Droplets,
  Flower2,
  Home,
  MapPinned,
  Road,
  ShieldCheck,
  Zap,
  Trees,
  type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const journey = [
  {
    number: "01",
    title: "Site Development",
    status: "In Progress",
    points: ["Land Preparation", "Internal Roads", "Core Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1747011950541-4d3eecc36755?auto=format&fit=crop&w=1200&q=82",
    alt: "Bulldozers preparing a construction site",
    Icon: Construction,
  },
  {
    number: "02",
    title: "Residential Plots",
    status: "Now Available",
    points: ["Well-planned Plots", "Clear Demarcation", "Utilities in Progress"],
    image:
      "https://images.unsplash.com/photo-1567986096906-186c34943cc1?auto=format&fit=crop&w=1200&q=82",
    alt: "Aerial view of green cultivated plots",
    Icon: MapPinned,
  },
  {
    number: "03",
    title: "Simplex Private House (G+1)",
    status: "Build / Book Now",
    points: ["Modern Design", "Spacious 1,500 Sq. Ft.", "Construction Link Plan Available"],
    image:
      "https://images.unsplash.com/photo-1757361653037-dbf0d0a820ae?auto=format&fit=crop&w=1200&q=82",
    alt: "Modern two-story home with landscaped lawn",
    Icon: Home,
  },
];

const offerings = [
  {
    eyebrow: "Plot Area 1080 SQFT.",
    title: "Residential Plot (Type A)",
    description: "Ideal for your future home",
    price: "₹15,51,000",
    note: "EDC, PLC & other charges extra",
    Icon: Flower2,
  },
  {
    eyebrow: "Plot Area 1200 SQFT.",
    title: "Residential Plot (Type B)",
    description: "Larger space, more possibilities",
    price: "₹17,51,000",
    note: "EDC, PLC & other charges extra",
    Icon: MapPinned,
  },
  {
    eyebrow: "Simplex Private House (G+1)",
    title: "Area: 1,500 Sq. Ft.",
    description: "EMI Plan Available · Construction Link Plan Available",
    price: "₹55 Lakh",
    note: "EDC, PLC & other charges extra",
    Icon: Home,
  },
];

const essentials: { label: string; status: string; Icon: LucideIcon }[] = [
  { label: "Internal Roads", status: "In Progress", Icon: Road },
  { label: "Electricity", status: "Planned", Icon: Zap },
  { label: "Water Supply & STP", status: "Planned", Icon: Droplets },
  { label: "Green & Open Spaces", status: "In Development", Icon: Trees },
  { label: "24×7 Security", status: "Planned", Icon: ShieldCheck },
];

export default function Experience() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.75, delay, ease },
        };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden bg-[#082F27] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-28 h-[440px] w-[440px] rounded-full border border-[#DFC587]/10"
      />

      <div className="relative mx-auto max-w-[1360px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <motion.div {...reveal()} className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#DFC587]/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#DFC587] sm:text-[11px]">
            <Flower2 size={15} strokeWidth={1.7} aria-hidden="true" />
            The Eco Vista Experience
          </span>

          <h2
            id="experience-heading"
            className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(2.35rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.035em]"
          >
            From land development to
            <span className="block text-[#DFC587]">your dream home.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            Eco Vista is taking shape as a complete residential community,
            from well-planned plots to ready-to-build and ready-to-move homes.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {journey.map(({ number, title, status, points, image, alt, Icon }, i) => (
            <motion.article
              key={number}
              {...reveal(i * 0.08)}
              className="group relative min-h-[390px] overflow-hidden rounded-[22px] border border-[#DFC587]/20 bg-[#174C3C] sm:min-h-[430px]"
            >
              <Image
                src={image}
                alt={alt}
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082F27] via-[#082F27]/35 to-[#082F27]/5" />

              <div className="absolute inset-x-0 top-0 flex items-center gap-3 bg-[#082F27]/90 px-5 py-4 backdrop-blur-sm sm:px-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DFC587] font-serif text-lg font-bold text-[#082F27]">
                  {number}
                </span>
                <span className="font-semibold leading-snug text-white sm:text-lg">
                  {title}
                  <span className="mt-0.5 block text-xs font-medium text-white/75 sm:text-sm">
                    {status}
                  </span>
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DFC587]/60 bg-[#082F27]/45 text-[#DFC587]">
                  <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <ul className="space-y-2 text-sm font-medium text-white/90 sm:text-[15px]">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check
                        size={17}
                        strokeWidth={2.5}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-[#DFC587]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div {...reveal(0.08)} className="mt-16 sm:mt-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFC587]/50 to-[#DFC587]/20" />
            <h3 className="rounded-full border border-[#DFC587]/30 bg-[#174C3C] px-5 py-2 font-serif text-xl text-white sm:px-8 sm:text-2xl">
              Our Offerings at Eco Vista
            </h3>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#DFC587]/50 to-[#DFC587]/20" />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {offerings.map(({ eyebrow, title, description, price, note, Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#DFC587]/35 bg-[#F7F4EC] px-5 pb-5 pt-0 text-[#17241F] sm:px-6"
              >
                <span className="-mt-3 inline-flex max-w-full rounded-full bg-[#DFC587] px-4 py-2 text-xs font-bold text-[#082F27] shadow-sm sm:text-sm">
                  {eyebrow}
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <Icon size={21} strokeWidth={1.6} aria-hidden="true" className="mt-1 shrink-0 text-[#8c7138]" />
                  <div className="min-w-0">
                    <span className="block font-serif text-lg leading-tight text-[#082F27] sm:text-xl">
                    {title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#17241F]/70 sm:text-[13px]">
                      {description}
                    </span>
                    <span className="mt-3 inline-block rounded-md bg-[#174C3C] px-4 py-1.5 font-serif text-xl font-bold text-white sm:text-2xl">
                      {price}
                    </span>
                    <span className="mt-1 block text-[10px] leading-4 text-[#17241F]/65">
                      ({note})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.08)}
          className="mt-12 overflow-hidden rounded-[22px] border border-[#DFC587]/25 bg-[#174C3C]/55 sm:mt-14"
        >
          <div className="flex flex-col gap-4 border-b border-[#DFC587]/15 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="font-serif text-xl leading-tight sm:text-2xl">
              <span className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#082F27] text-[#DFC587] align-middle">
                <Construction size={20} aria-hidden="true" />
              </span>
              Township Development Highlights
            </p>
            <Link
              href="#amenities"
              className="group inline-flex items-center gap-2 self-start text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFC587] transition-colors hover:text-white sm:self-auto"
            >
              Explore amenities
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {essentials.map(({ label, status, Icon }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-3 border-b border-r border-white/10 px-3 py-6 text-center last:border-r-0 sm:px-4 sm:py-7 lg:border-b-0 lg:[&:nth-child(5n)]:border-r-0"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A45C]/50 text-[#DFC587]">
                  <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <span className="text-[11px] font-medium leading-snug text-[#F7F4EC]/90 sm:text-xs">
                  {label}
                  <span className="mt-1 block text-[10px] text-[#DFC587]">({status})</span>
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...reveal(0.1)} className="mt-10 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#DFC587] bg-[#C9A45C] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#082F27] transition-colors hover:bg-[#DFC587] sm:px-9 sm:text-[11px]"
          >
            Enquire Now
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
