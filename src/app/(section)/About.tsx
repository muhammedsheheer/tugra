import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#070D0F] py-12 md:py-40">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute right-10 hidden md:block">
        <motion.p
          className="max-w-[480px] text-center font-roboto text-sm font-[300] text-[#C9AB81] md:text-start md:text-base"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          At Tugra Meathouse, our first priority is to ensure that our guests spend time with their families in a comfortable, safe and delicious way and that we can turn their visit into a fun experience with our great food. In addition to all this, Tugra Meathouse presents our guests with unique local and international meats and seafood prepared by our Executive Chef and their team. The prominence of carefully selected local ingredients, fresh and thoughtfully chosen, is another notable feature.
        </motion.p>
      </div>
      <div className="absolute -top-24 left-44 z-0 hidden md:block">
        <Image
          src={"/images/home/about/bg.png"}
          width={160}
          height={160}
          alt="logo"
          className="z-0 h-[650px] w-full"
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-28">
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <h6 className="text-center font-birthstone text-lg font-[400] tracking-[0.757px] text-[#C9AB81] md:text-xl">
              Our Story
            </h6>
            <h2 className="text-center font-cormorant text-3xl font-[400] uppercase tracking-[5px] text-[#C9AB81] md:text-4xl md:tracking-[10px]">
              About us
            </h2>
          </div>
          <div className="md:hidden">
            <motion.p
              className="max-w-[480px] text-center font-roboto text-sm font-[300] text-[#C9AB81] md:text-start md:text-base"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
          At Tugra Meathouse, our first priority is to ensure that our guests spend time with their families in a comfortable, safe and delicious way and that we can turn their visit into a fun experience with our great food. In addition to all this, Tugra Meathouse presents our guests with unique local and international meats and seafood prepared by our Executive Chef and their team. The prominence of carefully selected local ingredients, fresh and thoughtfully chosen, is another notable feature.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-2 md:gap-8">
          <motion.h1
            className="font-cormorant text-7xl font-[400] uppercase md:text-[30vw]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(180deg, #9B834E 39.28%, #352D1B 99.79%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            T
          </motion.h1>
          <motion.img
            src={"/images/home/about/image.png"}
            width={160}
            height={160}
            alt="logo"
            className="z-50 mt-5 h-28 md:mt-24 md:h-96 md:w-80"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.h1
            className="font-cormorant text-7xl font-[400] uppercase md:text-[30vw]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(180deg, #9B834E 39.28%, #352D1B 99.79%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            G
          </motion.h1>
          <motion.h1
            className="font-cormorant text-7xl font-[400] uppercase md:text-[30vw]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(180deg, #9B834E 39.28%, #352D1B 99.79%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            R
          </motion.h1>
          <motion.h1
            className="font-cormorant text-7xl font-[400] uppercase md:text-[30vw]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(180deg, #9B834E 39.28%, #352D1B 99.79%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            A
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default About;
