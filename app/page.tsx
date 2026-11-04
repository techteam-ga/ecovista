"use client";

import { useState } from "react";

import About from "@/components/about";
import Amenities from "@/components/amenities";
import EnquiryRail from "@/components/enquiry-rail";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Location from "@/components/location";
import Navbar from "@/components/navbar";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <Navbar onMenuToggle={setMenuOpen} />

      <Hero />

      <About />

      <Experience />

      <Amenities />

      <Location />

      <Gallery />

      <Contact />

      <EnquiryRail hidden={menuOpen} openTrigger={0} />
    </main>
  );
}
