import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Reservation: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home/reservation/bg1.png')" }}
    >
      <div className="absolute inset-0 flex justify-center md:hidden">
        <motion.div
          // className="flex w-full max-w-screen-xl flex-col items-center justify-center gap-4 px-8 py-16 md:gap-8 md:px-20 md:py-24 2xl:py-32"
          // style={{
          //   backgroundImage: "url('/images/home/reservation/bg2.png')",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center", // optional: center the background
          // }}
          className="flex h-full w-full max-w-screen-xl flex-col items-center justify-center gap-6 px-6 py-12 md:gap-8 md:px-20 md:py-24 2xl:py-32"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            backgroundImage: "url('/images/home/reservation/bg2.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-center gap-2 md:gap-5">
              <h6 className="font-cormorant text-center text-3xl font-[400] uppercase tracking-[5px] text-[#000] md:text-5xl md:tracking-[13px]">
                Reserve <br />
                Your Table
              </h6>
            </div>
          </div>
          <div>
            <p className="font-roboto w-full max-w-[500px] text-center text-sm font-[400] leading-[150%] text-[rgba(0,0,0,0.60)] md:text-base">
              Secure your spot for an unforgettable Turkish dining experience.
              Book your table now and let us take care of the rest!
            </p>
          </div>
          <div>
            <Link href={"/table-booking"}>
              <Button
                className="relative z-40 mt-2 flex items-center justify-center gap-3 px-10 py-7 uppercase md:px-14 md:py-16"
                variant="imageoutline"
              >
                Book Now{" "}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      {/*big screen */}
      <div className="absolute inset-0 hidden justify-center md:flex">
        <motion.div
          className="flex w-full max-w-screen-xl flex-col items-center justify-center gap-4 px-8 py-16 md:gap-8 md:px-20 md:py-24 2xl:py-32"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            backgroundImage: "url('/images/home/reservation/bg2.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", // optional: center the background
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-center gap-2 md:gap-5">
              <h6 className="font-cormorant text-center text-3xl font-[400] uppercase tracking-[5px] text-[#000] md:text-5xl md:tracking-[13px]">
                Reserve <br />
                Your Table
              </h6>
            </div>
          </div>
          <div>
            <p className="font-roboto w-full max-w-[500px] text-center text-sm font-[400] lowercase leading-[150%] text-[rgba(0,0,0,0.60)] md:text-base">
              Secure your spot for an unforgettable Turkish dining experience.
              Book your table now and let us take care of the rest!
            </p>
          </div>
          <div>
            <Link href={"/table-booking"}>
              <Button
                className="relative z-40 mt-2 flex items-center justify-center gap-3 px-10 py-7 uppercase md:px-14 md:py-16"
                variant="imageoutline"
              >
                Book Now{" "}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
