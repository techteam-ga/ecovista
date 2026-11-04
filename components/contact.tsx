"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, MapPin, Phone } from "lucide-react";

const locationMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=C%2Fo%20Manoj%2C%20Sriram%20Complex%2C%20Hotel%20Mayur%2C%204th%20Floor%2C%20Nawadih%2C%20Hirak%20Road%2C%20next%20to%20Omkar%20Market%2C%20Dhanbad%20828130";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0c2d20] text-[#f4efdf]"
    >
      {/* =====================================================
          LOCATION
      ====================================================== */}

      <section className="relative px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          {/* Heading */}
          <div className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#d2af68]" />

                <span className="text-[10px] uppercase tracking-[0.35em] text-[#f4efdf]/45">
                  Visit EcoVista
                </span>
              </div>

              <h2 className="font-serif text-[clamp(3.2rem,6vw,6rem)] leading-[0.9] tracking-[-0.04em]">
                Find your way
                <br />
                <span className="italic text-[#d2af68]">home.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-4 md:col-start-9"
            >
              <div className="flex items-start gap-4">
                <MapPin
                  size={19}
                  strokeWidth={1.3}
                  className="mt-1 shrink-0 text-[#d2af68]"
                />

                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#f4efdf]/35">
                    EcoVista
                  </p>

                  <p className="text-sm leading-7 text-[#f4efdf]/65">
                    C/o Manoj, Sriram Complex
                    <br />
                    Hotel Mayur, 4th Floor
                    <br />
                    Nawadih, Hirak Road, next to Omkar Market
                    <br />
                    Dhanbad, Jharkhand 828130
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] overflow-hidden border border-[#f4efdf]/15 md:h-[540px]"
          >
            <iframe
              title="EcoVista Location"
              src="https://www.google.com/maps?q=C%2Fo%20Manoj%2C%20Sriram%20Complex%2C%20Hotel%20Mayur%2C%204th%20Floor%2C%20Nawadih%2C%20Hirak%20Road%2C%20next%20to%20Omkar%20Market%2C%20Dhanbad%20828130&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[#123d2b]/10" />

            {/* Map label */}
            <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
              <div className="flex items-center gap-3 border border-[#123d2b]/20 bg-[#f4efdf]/95 px-4 py-3 text-[#123d2b] backdrop-blur-sm">
                <MapPin size={15} strokeWidth={1.5} />

                <span className="text-[9px] font-medium uppercase tracking-[0.25em]">
                  EcoVista · Dhanbad
                </span>
              </div>
            </div>

            {/* External maps link */}
            <a
              href={locationMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute right-5 top-5 flex items-center gap-3 bg-[#0c2d20] px-4 py-3 text-[#f4efdf] md:right-7 md:top-7"
            >
              <span className="text-[9px] uppercase tracking-[0.25em]">
                Open in Maps
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Location information */}
          <div className="mt-10 grid gap-8 border-t border-[#f4efdf]/10 pt-8 md:grid-cols-3">
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#d2af68]">
                Address
              </p>

              <p className="text-sm leading-6 text-[#f4efdf]/60">
                C/o Manoj, Sriram Complex
                <br />
                Hotel Mayur, 4th Floor
                <br />
                Nawadih, Hirak Road
                <br />
                Next to Omkar Market, Dhanbad 828130
              </p>
            </div>

            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#d2af68]">
                Connectivity
              </p>

              <p className="text-sm leading-6 text-[#f4efdf]/60">
                Next to Omkar Market
                <br />
                Nawadih, Dhanbad, Jharkhand
              </p>
            </div>

            <div className="md:text-right">
              <a
                href={locationMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#f4efdf]/65 transition-colors hover:text-[#d2af68]"
              >
                Get Directions
                <span className="flex h-9 w-9 items-center justify-center border border-[#f4efdf]/20 transition-all duration-300 group-hover:border-[#d2af68]">
                  <ArrowUpRight size={14} strokeWidth={1.4} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <div className="border-t border-[#f4efdf]/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
          {/* Main footer */}
          <div className="grid gap-16 py-20 md:grid-cols-12 md:py-24">
            {/* Brand */}
            <div className="md:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#d2af68]">
                  EcoVista
                </p>

                <h3 className="max-w-2xl font-serif text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.04em]">
                  Life,
                  <br />
                  <span className="italic text-[#d2af68]">naturally.</span>
                </h3>

                <p className="mt-8 max-w-md text-sm leading-7 text-[#f4efdf]/40">
                  A thoughtfully planned community in Dhanbad, created for
                  a more connected relationship between home, nature and
                  everyday life.
                </p>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 md:col-start-8">
              <p className="mb-6 text-[9px] uppercase tracking-[0.35em] text-[#f4efdf]/30">
                Explore
              </p>

              <nav className="space-y-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="group flex w-fit items-center gap-3 font-serif text-lg text-[#f4efdf]/65 transition-colors duration-300 hover:text-[#d2af68]"
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.3}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <p className="mb-6 text-[9px] uppercase tracking-[0.35em] text-[#f4efdf]/30">
                Connect
              </p>

              <div className="space-y-5">
                <a
                  href={locationMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm leading-6 text-[#f4efdf]/60 transition-colors hover:text-[#d2af68]"
                >
                  <MapPin size={14} strokeWidth={1.3} className="mt-1 shrink-0" />
                  <span>
                    C/o Manoj, Sriram Complex, Hotel Mayur, 4th Floor,
                    Nawadih, Hirak Road, Dhanbad 828130
                    <span className="mt-1 block text-[9px] uppercase tracking-[0.2em]">
                      View location in Maps
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+919748649999"
                  className="group flex items-center gap-3 text-sm text-[#f4efdf]/60 transition-colors hover:text-[#d2af68]"
                >
                  <Phone size={14} strokeWidth={1.3} />

                  <span>+91 97486 49999</span>
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-[#f4efdf]/60 transition-colors hover:text-[#d2af68]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-[14px] w-[14px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.75"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>

                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-5 border-t border-[#f4efdf]/10 py-7 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#f4efdf]/25">
                © {new Date().getFullYear()} EcoVista
              </p>

              <span className="hidden h-3 w-px bg-[#f4efdf]/15 md:block" />

              <p className="text-[9px] uppercase tracking-[0.25em] text-[#f4efdf]/25">
                All Rights Reserved
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-[9px] uppercase tracking-[0.25em] text-[#f4efdf]/25 transition-colors hover:text-[#d2af68]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[9px] uppercase tracking-[0.25em] text-[#f4efdf]/25 transition-colors hover:text-[#d2af68]"
              >
                Disclaimer
              </a>

              <a
                href="#"
                aria-label="Back to top"
                className="flex h-9 w-9 items-center justify-center border border-[#f4efdf]/15 text-[#f4efdf]/50 transition-all duration-300 hover:border-[#d2af68] hover:text-[#d2af68]"
              >
                <ArrowUp size={14} strokeWidth={1.3} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
