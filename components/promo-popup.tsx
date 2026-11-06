"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="promo-backdrop"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.28, ease }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#031a14]/75 p-3 pt-[max(1rem,env(safe-area-inset-top))] backdrop-blur-sm sm:p-6 sm:pt-8"
          role="dialog"
          aria-modal="true"
          aria-label="Eco Vista Dhanteras pre-launch offer"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: -14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: -8 }}
            transition={{
              duration: reduceMotion ? 0 : 0.48,
              ease,
            }}
            className="relative w-fit max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-2xl border border-[#DFC587]/70 bg-[#082F27] shadow-[0_28px_100px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:max-w-[min(88vw,660px)]"
          >
            <Image
              src="/images/pop-up.jpeg"
              alt="Eco Vista Dhanteras pre-launch offer: book your plot or simplex and get free land registry and a one gram gold coin. Terms and conditions apply."
              width={1200}
              height={1280}
              priority
              sizes="(max-width: 640px) calc(100vw - 1.5rem), min(88vw, 660px)"
              className="block h-auto max-h-[calc(100svh-2rem)] w-auto max-w-full object-contain"
            />

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close promotional offer"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-[#082F27]/85 text-white shadow-lg backdrop-blur-md transition hover:border-[#DFC587] hover:bg-[#174C3C] hover:text-[#DFC587] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFC587]"
            >
              <X size={20} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
