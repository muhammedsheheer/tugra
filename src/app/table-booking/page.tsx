import Hero from "@/app/table-booking/(section)/Hero";
import TableBooking from "@/app/table-booking/(section)/TableBooking";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TableBookingN from "./(section)/TableBookingN";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#070d0f]">
        <Navbar position="absolute" />
        <Hero />
        {/* <TableBooking /> */}
        <TableBookingN />
        <Footer />
      </div>
    </main>
  );
}
