"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import { motion } from "framer-motion";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#070D0F] pb-8 md:px-0 lg:pb-12">
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2 pb-4 md:pb-6">
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
                S
              </motion.span>
              {"TORIES FROM HEART"}
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
                S
              </motion.span>
            </h6>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-4 md:p-0">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent>
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/4"
                    >
                      <div className="flex h-[300px] flex-col items-center justify-center gap-6 border border-[#C9AB81] bg-transparent px-6 py-8 md:h-[400px]">
                        <div className="flex w-full justify-center">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <Icons.star
                                key={index}
                                className="text-[#C9AB81]"
                              />
                            ),
                          )}
                        </div>
                        <div className="flex flex-col gap-4">
                          <p className="line-clamp-6 text-center font-cormorant text-sm font-[500] uppercase text-[#BBB4AA] md:px-4 lg:leading-[120%]">
                            {review.text.text}
                          </p>
                        </div>
                        <div>
                          <p className="text-center font-cormorant text-sm font-[600] uppercase leading-[120%] text-[#BBB4AA]">
                            {review.authorAttribution.displayName}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#0E171A] text-[#0E171A] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#0E171A] text-[#0E171A] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
