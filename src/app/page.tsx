"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import About from "./(section)/About";
import Story from "./(section)/Story";
import Follow from "./(section)/Follow";
import Special from "./(section)/(special)/Special";
import Guests from "./(section)/Guests";
import Nova from "./(section)/Nova";
import Reservation from "./(section)/Reservation";
import Reviews from "./(section)/Review";
import Glimpses from "./(section)/Glimpses";
import { Highlights } from "./(section)/Highlights";
import ViewMenu from "@/components/floating-buttons/ViewMenu";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <About />
        <Special />
        <Highlights />
        <Nova />
        <Reservation />
        <Reviews />
        <Follow />
        <Footer />
      </div>
      <div className="fixed bottom-6 right-2 z-50 flex md:bottom-[54px] md:right-[48px]">
        <ViewMenu />
      </div>
    </main>
  );
}
