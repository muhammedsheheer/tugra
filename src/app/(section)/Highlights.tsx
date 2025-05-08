import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { motion } from "framer-motion";

export function Highlights() {
  return (
    <section className="relative h-full w-full bg-[#070D0F] px-16 py-12 md:px-40 md:py-20">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-16 md:gap-28">
        <div className="flex flex-col items-center justify-center gap-2">
          <h6 className="text-center font-cormorant text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
            <motion.span
              className="inline-block"
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0, 15, 0] }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              w
            </motion.span>
            {"hat do we have for yo"}
            <motion.span
              className="inline-block"
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0, 15, 0] }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              u
            </motion.span>
          </h6>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="md:ml-4">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="border p-4 md:p-6">
                <motion.img
                  src="/images/home/highlights/1.jpg"
                  alt="frame 1"
                  width={500}
                  height={300}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-auto w-full object-cover md:h-[350px]"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="border p-4 md:p-6">
                <motion.img
                  src="/images/home/highlights/2.jpg"
                  alt="frame 1"
                  width={500}
                  height={300}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-auto w-full object-cover md:h-[350px]"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="border p-4 md:p-6">
                <motion.img
                  src="/images/home/highlights/3.jpg"
                  alt="frame 1"
                  width={500}
                  height={300}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-auto w-full object-cover md:h-[350px]"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
