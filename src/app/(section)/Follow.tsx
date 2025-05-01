import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/Icon";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#070D0F] pt-16 md:pt-32">
      <div className="absolute left-0 top-0 z-0 md:-top-36 md:left-2">
        <Image
          src={"/images/home/follow/bg.png"}
          width={160}
          height={160}
          alt="logo"
          className="h-[300px] w-full object-cover md:h-[1200px] md:w-[1200px]"
        />
      </div>
      {/* big screen */}
      <div className="hidden flex-col gap-8 md:flex md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-[40px] 2xl:px-[50px]">
          <motion.h1
            className="pb-6 text-end font-open_sans text-3xl font-[400] uppercase tracking-[3.2px] text-[#C9AB81] md:pb-14 md:pr-[10%] md:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            SCROLL YOUR INSTAGRAM
          </motion.h1>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/1.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-50 h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="z-50 flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              {/* <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              /> */}
              <Link href={"https://www.instagram.com/tugrahayes/"}>
                <Icons.instagram className="h-32 w-32 text-[#CEAC5C]" />
              </Link>
              <div>
                <Link
                  href={"https://www.instagram.com/tugrahayes/"}
                  target="_blank"
                  className="text-md text-center font-open_sans font-[400] uppercase text-[#CEAC5C] md:text-3xl"
                >
                  @tugrahayes
                </Link>
              </div>
            </motion.div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/4.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-50 h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <motion.img
                src={"/images/home/follow/5.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-50 h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/6.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-[300px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/*mobile view */}
      <div className="flex flex-col gap-8 md:hidden md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-[60px] 2xl:px-[80px]">
          <motion.h1
            className="pb-6 text-center font-open_sans text-3xl font-[400] uppercase tracking-[3.2px] text-[#C9AB81] md:pb-16 md:text-7xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            SCROLL YOUR INSTAGRAM
          </motion.h1>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              {/* <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              /> */}
              <Link href={"https://www.instagram.com/tugrahayes/"}>
                <Icons.instagram className="h-24 w-24 text-[#CEAC5C]" />
              </Link>
              <div>
                <Link
                  href={"https://www.instagram.com/tugrahayes/"}
                  target="_blank"
                  className="text-md text-center font-open_sans font-[400] uppercase text-[#CEAC5C] md:text-xl"
                >
                  @tugrahayes
                </Link>
              </div>
            </motion.div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            {/* <div className="w-full md:w-[50%]">
              {" "}
              <motion.img
                src={"/images/home/follow/5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div> */}

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/6.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-auto w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
