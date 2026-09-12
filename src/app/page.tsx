// src/app/page.tsx
import CrosshairCursor from "@/components/CrosshairCursor";
import Hero from "@/components/sections/Hero";
import Identity from "@/components/sections/Identity";
import Timeline from "@/components/sections/Timeline";
import Systems from "@/components/sections/Systems";
import Stack from "@/components/sections/Stack";
import Record from "@/components/sections/Record";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <CrosshairCursor />
      <main>
        <Hero />
        <Identity />
        <Timeline />
        <Systems />
        <Stack />
        <Record />
        <Contact />
        <Footer />
      </main>
    </>
  );
}