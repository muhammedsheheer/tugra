import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Nova: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#070D0F] px-4 py-14 md:px-36 md:py-28">
      <div className="absolute -top-8 right-0 z-0 md:-top-16">
        <Image
          src={"/images/home/nova/bg.png"}
          width={160}
          height={160}
          alt="logo"
          className="h-[300px] w-full md:h-[900px]"
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="pb-4 md:pb-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <h6 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
              FROM OUR <br /> ARCHIVES
            </h6>
          </div>
        </div>
        <div className="flex w-full flex-row gap-2 md:gap-6">
          <div className="hidden w-[30%] md:block">
            <motion.img
              src={"/images/home/nova/image.png"}
              width={160}
              height={160}
              alt="logo"
              className="h-[800px] w-full object-cover md:h-full"
            />
          </div>
          <div className="z-50 grid w-full grid-cols-2 gap-2 md:w-[70%] md:grid-cols-2 md:gap-4">
            <motion.img
              src={"/images/home/nova/1.png"}
              width={160}
              height={160}
              alt="logo"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="z-50 h-[150px] w-full object-cover md:h-[400px]"
            />
            <motion.img
              src={"/images/home/nova/2.png"}
              width={160}
              height={160}
              alt="logo"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="z-50 h-[150px] w-full object-cover md:h-[400px]"
            />
            <motion.img
              src={"/images/home/nova/3.png"}
              width={160}
              height={160}
              alt="logo"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-[150px] w-full object-cover md:h-[400px]"
            />
            <motion.img
              src={"/images/home/nova/4.png"}
              width={160}
              height={160}
              alt="logo"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-[150px] w-full object-cover md:h-[400px]"
            />
            <motion.img
              src={"/images/home/nova/5.png"}
              width={160}
              height={160}
              alt="logo"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-[150px] w-full object-cover md:h-[400px]"
            />
            <motion.img
              src={"/images/home/nova/6.png"}
              width={160}
              height={160}
              alt="logo"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-[150px] w-full object-cover md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nova;
