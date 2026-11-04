"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
];

interface NavbarProps {
  onMenuToggle?: (open: boolean) => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar scroll appearance.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Keep the parent informed about the mobile menu state.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    onMenuToggle?.(isMenuOpen);

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, onMenuToggle]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0c2d20]/75 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {!isScrolled && (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 via-black/10 to-transparent"
            aria-hidden="true"
          />
        )}

        <nav
          aria-label="Main navigation"
          className={`relative mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 ${
            isScrolled ? "h-[76px]" : "h-[90px]"
          }`}
        >
          {/* LOGO */}

          <Link
            href="/"
            aria-label="EcoVista home"
            className="group relative z-[60] flex shrink-0 items-center gap-3"
            onClick={closeMenu}
          >
            <div className="flex h-11 w-11 items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 transition-transform duration-500 group-hover:scale-105"
                aria-hidden="true"
              >
                <path
                  d="M24 38V12"
                  stroke="#D2AF68"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M24 18C19 13 14 13 11 14C12 19 16 23 24 23"
                  stroke="#D2AF68"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 14C28 9 33 8 37 9C36 15 32 19 24 20"
                  stroke="#D2AF68"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 25C19 21 15 22 12 24C14 29 18 31 24 30"
                  stroke="#D2AF68"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 23C29 19 34 20 37 22C35 27 31 29 24 29"
                  stroke="#D2AF68"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-col leading-none">
              <span
                className="font-serif text-[22px] font-medium tracking-[0.08em] text-[#fffaf0]"
                style={{
                  textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                }}
              >
                ECO VISTA
              </span>

              <span className="mt-1 text-[8px] font-bold tracking-[0.42em] text-[#d2af68]">
                TOWNSHIP
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative py-3 text-[11px] font-bold uppercase tracking-[0.17em] text-white transition-colors duration-300 hover:text-[#e0c17a]"
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.65)",
                  }}
                >
                  {link.label}

                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#d2af68] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* DESKTOP ACTIONS */}

            <div className="ml-10 flex items-center gap-5">
              <a
                href="tel:+918436969369"
                aria-label="Call EcoVista"
                className="group flex items-center gap-2 text-white transition-colors duration-300 hover:text-[#e0c17a]"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.65)",
                }}
              >
                <Phone
                  size={15}
                  strokeWidth={1.7}
                  className="text-[#d2af68]"
                  aria-hidden="true"
                />

                <span className="text-[11px] font-semibold tracking-[0.08em]">
                  +91 84369 69369
                </span>
              </a>

              {/* CONNECTED TO SHARED ENQUIRY FORM */}

              <a
                href="https://customer.ecovistadhanbad.com/"
                className="group flex items-center gap-2 border border-[#d2af68] bg-[#d2af68] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#102f21] shadow-[0_5px_18px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-[#e0c17a]"
              >
                Booking Now
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="relative z-[60] flex h-11 w-11 items-center justify-center border border-white/35 bg-black/10 text-white backdrop-blur-[2px] transition-all duration-300 hover:border-[#d2af68] hover:text-[#d2af68] lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={21} strokeWidth={1.5} aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={21} strokeWidth={1.5} aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* MOBILE NAVIGATION */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#0c2d20] lg:hidden"
          >
            {/* DECORATIVE BACKGROUND */}

            <div
              className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]"
              aria-hidden="true"
            >
              <div className="absolute -right-20 top-20 h-80 w-80 rounded-full border border-[#d2af68]" />
              <div className="absolute -right-10 top-32 h-64 w-64 rounded-full border border-[#d2af68]" />
              <div className="absolute -bottom-20 -left-32 h-96 w-96 rounded-full border border-[#d2af68]" />
            </div>

            <div className="flex h-full flex-col justify-between overflow-y-auto px-6 pb-8 pt-32 sm:px-10">
              {/* MOBILE LINKS */}

              <div>
                <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d2af68]">
                  Explore EcoVista
                </p>

                <div>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.08 + index * 0.06,
                        ease,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="group flex items-center justify-between border-b border-white/10 py-4"
                      >
                        <span className="font-serif text-3xl text-[#fffaf0] transition-colors duration-300 group-hover:text-[#d2af68] sm:text-4xl">
                          {link.label}
                        </span>

                        <ArrowUpRight
                          size={19}
                          strokeWidth={1.3}
                          aria-hidden="true"
                          className="text-[#d2af68] opacity-60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* MOBILE ACTIONS */}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mt-8 space-y-5"
              >
                <div className="h-px w-full bg-white/10" />

                <a
                  href="tel:+918436969369"
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#d2af68]"
                    aria-hidden="true"
                  />

                  <span>+91 84369 69369</span>
                </a>

                {/* CONNECTED TO SHARED ENQUIRY FORM */}

                <a
                  href="https://customer.ecovistadhanbad.com/"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 bg-[#d2af68] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#102f21] transition-colors duration-300 hover:bg-[#e0c17a]"
                >
                  Booking Now
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
