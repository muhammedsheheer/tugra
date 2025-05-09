import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://d8q1b3smcycac.cloudfront.net/tugra/tugra-thumb.png"
      >
        <source
          src="https://d8q1b3smcycac.cloudfront.net/tugra/tugra-et-web.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-0 bg-black/50"></div>

      {/* <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white md:mr-[50%]">
        <Image
          src={"/images/home/hero/hero.png"}
          width={281}
          height={74}
          alt="logo"
          className="mb-20 h-auto md:mb-0 md:h-[400px] md:w-[700px]"
        />
      </div> */}

      <div className="z-5 absolute left-0 top-0 h-full w-full"></div>
    </section>
  );
};

export default Hero;
