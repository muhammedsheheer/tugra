import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#070D0F] py-12 md:py-40">
      <div className="absolute right-10 hidden md:block">
        <p className="max-w-[480px] text-center font-inter text-sm font-[300] text-[#C9AB81] md:text-start md:text-base">
          Our journey started in September 2017 with two very passionate chefs
          and two managers (Hoja-Iso, Janer). Our mission is to reflect our
          passion and enthusiasm for Turkish cuisine through our very unique
          menu and delicately sources authentic ingredients. This is a stand
          alone, an individual restaurant with no other branches. We are in
          Hayes-Bromley serving contemporary Mediterranean Food” 
        </p>
      </div>
      <div className="absolute -top-20 left-44 z-0 hidden md:block">
        <Image
          src={"/images/home/about/bg.png"}
          width={160}
          height={160}
          alt="logo"
          className="h-[600px] w-full"
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-28">
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <h6 className="text-center font-birthstone text-lg font-[400] tracking-[0.757px] text-[#C9AB81] md:text-xl">
              Our Story
            </h6>
            <h2 className="text-center font-open_sans text-3xl font-[400] uppercase tracking-[5px] text-[#C9AB81] md:text-4xl md:tracking-[10px]">
              About us
            </h2>
          </div>
          <div className="md:hidden">
            <p className="max-w-[350px] text-center font-inter text-sm font-[300] text-[#C9AB81] md:text-start md:text-base">
              Our journey started in September 2017 with two very passionate
              chefs and two managers (Hoja-Iso, Janer). Our mission is to
              reflect our passion and enthusiasm for Turkish cuisine through our
              very unique menu and delicately sources authentic ingredients.
              This is a stand alone, an individual restaurant with no other
              branches. We are in Hayes-Bromley serving contemporary
              Mediterranean Food” 
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-2 md:gap-8">
          <h1
            className="font-open_sans text-9xl font-[400] uppercase md:text-[25vw]"
            style={{
              background:
                "linear-gradient(180deg, #9B834E 39.28%, #352D1B 99.79%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            T
          </h1>
          <Image
            src={"/images/home/about/image.png"}
            width={160}
            height={160}
            alt="logo"
            className="mt-5 h-28 md:mt-20 md:h-80 md:w-80"
          />
          <h1
            className="font-open_sans text-9xl font-[400] uppercase md:text-[25vw]"
            style={{
              background:
                "linear-gradient(180deg, #9B834E 39.28%, #352D1B 99.79%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            U
          </h1>
          <h1
            className="font-open_sans text-9xl font-[400] uppercase md:text-[25vw]"
            style={{
              background:
                "linear-gradient(180deg, #9B834E 39.28%, #352D1B 99.79%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            G
          </h1>
          <h1
            className="font-open_sans text-9xl font-[400] uppercase md:text-[25vw]"
            style={{
              background:
                "linear-gradient(180deg, #9B834E 39.28%, #352D1B 99.79%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            R
          </h1>
          <h1
            className="font-open_sans text-9xl font-[400] uppercase md:text-[25vw]"
            style={{
              background:
                "linear-gradient(180deg, #9B834E 39.28%, #352D1B 99.79%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            A
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
