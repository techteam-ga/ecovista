/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

interface EnquiryRailProps {
  hidden?: boolean;
  openTrigger?: number;
}

interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
}

type Status = "idle" | "loading" | "success" | "error";

const initialFormData: EnquiryFormData = {
  name: "",
  phone: "",
  email: "",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function EnquiryRail({
  hidden = false,
  openTrigger = 0,
}: EnquiryRailProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<EnquiryFormData>(initialFormData);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  // Open the same form when requested by the navbar.
  useEffect(() => {
    if (openTrigger > 0) {
      setStatus("idle");
      setIsOpen(true);
    }
  }, [openTrigger]);

  // Escape key and background scroll management.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && status !== "loading") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, status]);

  const openPanel = () => {
    setStatus("idle");
    setIsOpen(true);
  };

  const closePanel = () => {
    if (status !== "loading") {
      setIsOpen(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!consent) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const payload = new FormData();

      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error("Missing Web3Forms access key");
      }

      payload.append("access_key", accessKey);
      payload.append("subject", "New EcoVista Site Visit Enquiry");
      payload.append("from_name", "EcoVista Website");
      payload.append("name", formData.name);
      payload.append("phone", formData.phone);
      payload.append("email", formData.email);
      payload.append(
        "message",
        "A visitor has requested an EcoVista site visit.",
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFormData(initialFormData);
      setConsent(false);

      window.setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
      }, 2000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* FLOATING ENQUIRY SIDEBAR */}

      <AnimatePresence>
        {!hidden && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.4, ease }}
            className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 flex-col overflow-hidden rounded-l-lg shadow-lg"
          >
            <button
              type="button"
              onClick={openPanel}
              aria-label="Open enquiry form"
              className="flex h-28.75 w-11 items-center justify-center bg-[#C9A45C] transition-colors hover:bg-[#DFC587] sm:h-[130px] sm:w-12"
            >
              <span className="rotate-180 [writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-[0.16em] text-[#082F27]">
                Enquire Now
              </span>
            </button>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/917488613737"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact EcoVista on WhatsApp"
              className="group flex h-11 w-11 items-center justify-center bg-[#174C3C] text-white transition-colors duration-300 hover:bg-[#082F27] sm:h-12 sm:w-12"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.43 0 .05 5.38.05 12c0 2.12.56 4.19 1.62 6.02L0 24l6.14-1.61A11.94 11.94 0 0 0 12.05 24C18.67 24 24.05 18.62 24.05 12c0-3.2-1.25-6.21-3.53-8.52ZM12.05 22a9.93 9.93 0 0 1-5.06-1.38l-.36-.21-3.64.95.97-3.55-.23-.37A9.95 9.95 0 0 1 2.05 12c0-5.51 4.49-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22.05 12c0 5.51-4.49 10-10 10Zm5.49-7.48c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.52 0 1.49 1.08 2.93 1.23 3.13.15.2 2.13 3.25 5.15 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMPACT ENQUIRY POPUP */}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close enquiry form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePanel}
              className="fixed inset-0 z-50 cursor-default bg-[#082F27]/50 backdrop-blur-[1px]"
            />

            <div className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto p-3 sm:p-5">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="ecovista-enquiry-title"
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 8 }}
                transition={{ duration: 0.3, ease }}
                className="pointer-events-auto relative my-auto w-full max-w-[390px] overflow-visible bg-[#C9A45C] px-5 pb-5 pt-9 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:px-6 sm:pb-6 sm:pt-9"
              >
                {/* CLOSE BUTTON */}

                <button
                  type="button"
                  onClick={closePanel}
                  disabled={status === "loading"}
                  aria-label="Close enquiry form"
                  className="absolute -right-1 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F4EC] text-[#17241F] shadow-md transition-transform duration-300 hover:rotate-90 disabled:opacity-50 sm:-right-2 sm:-top-2"
                >
                  <X size={20} strokeWidth={1.8} aria-hidden="true" />
                </button>

                {/* HEADING */}

                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#174C3C]">
                    Eco Vista Township
                  </p>

                  <h2
                    id="ecovista-enquiry-title"
                    className="mt-2 text-[18px] font-extrabold uppercase leading-tight tracking-[-0.02em] text-[#11140F] sm:text-[20px]"
                  >
                    Your Dream Home Start Here
                  </h2>
                </div>

                <p className="mt-4 text-[15px] font-bold leading-[1.35] text-[#11140F] sm:text-[16px]">
                  Book your exclusive site visit today and take the 1st step
                  towards owning your Dream property
                </p>

                {/* FORM FIELDS */}

                <form onSubmit={handleSubmit} className="mt-5">
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      aria-label="Name"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-10 w-full border-0 border-b-2 border-white bg-transparent px-0 text-[16px] font-semibold text-[#17241F] outline-none placeholder:font-semibold placeholder:text-white focus:border-[#174C3C]"
                    />

                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9+() -]{8,18}"
                      aria-label="Mobile number"
                      placeholder="Mobile No."
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-10 w-full border-0 border-b-2 border-white bg-transparent px-0 text-[16px] font-semibold text-[#17241F] outline-none placeholder:font-semibold placeholder:text-white focus:border-[#174C3C]"
                    />

                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      aria-label="Email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-10 w-full border-0 border-b-2 border-white bg-transparent px-0 text-[16px] font-semibold text-[#17241F] outline-none placeholder:font-semibold placeholder:text-white focus:border-[#174C3C]"
                    />
                  </div>

                  {/* CONSENT */}

                  <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-[11px] font-medium leading-[1.45] text-[#17241F] sm:text-xs">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(event) => setConsent(event.target.checked)}
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#174C3C]"
                    />

                    <span>
                      I authorize Eco Vista and its representatives to contact
                      me with updates and notifications via Email, SMS, WhatsApp
                      or Call.
                    </span>
                  </label>

                  {/* STATUS */}

                  {status === "error" && (
                    <p
                      role="alert"
                      className="mt-3 text-xs font-semibold text-[#7A2018]"
                    >
                      We could not submit your enquiry. Please check your
                      details and try again.
                    </p>
                  )}

                  {status === "success" && (
                    <p
                      role="status"
                      className="mt-3 text-center text-xs font-bold text-[#082F27]"
                    >
                      Thank you! Your enquiry has been submitted.
                    </p>
                  )}

                  {/* CTA BUTTON */}

                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="group mx-auto mt-6 flex min-h-12 w-[170px] items-center justify-center gap-2 rounded-xl bg-[#174C3C] px-5 py-3 text-[15px] font-extrabold text-white shadow-[0_4px_0_#082F27] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#082F27] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>
                      {status === "loading"
                        ? "Submitting..."
                        : status === "success"
                          ? "Submitted"
                          : "Enquire Now"}
                    </span>

                    {status !== "loading" && status !== "success" && (
                      <ArrowUpRight
                        size={17}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </button>

                  {/* PHONE CONTACT */}

                  {/* <p className="mt-4 text-center text-[15px] font-medium text-[#17241F]/80">
                    Prefer to call?{" "}
                    <a
                      href="tel:+917488613737"
                      className="font-bold underline underline-offset-2"
                    >
                      +91 74886 13737
                    </a>
                  </p> */}
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
