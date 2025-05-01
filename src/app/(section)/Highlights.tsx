// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import React from "react";

// const images = [
//   "/images/home/highlights/f1.png",
//   "/images/home/highlights/f2.png",
//   "/images/home/highlights/f3.png",
//   "/images/home/highlights/f1.png",
//   "/images/home/highlights/f2.png",
//   "/images/home/highlights/f3.png",
// ];

// const Highlights: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [imageWidth, setImageWidth] = useState(0);
//   const imagesPerView = 3;

//   useEffect(() => {
//     const updateWidth = () => {
//       const imgElement = document.querySelector(".slide-image");
//       if (imgElement) {
//         setImageWidth(imgElement.clientWidth + 16);
//       }
//     };

//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);

//   const handleNext = () => {
//     if (currentIndex < images.length - imagesPerView) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   return (
//     <section className="h-full w-full bg-[#070D0F] px-4 py-12 md:px-12 md:py-16 2xl:px-32">
//       <div className="flex flex-col gap-6 md:gap-14">
// <div className="flex flex-col items-center justify-center gap-2">
//   <h6 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
//     what do we <br /> have for you
//   </h6>
// </div>

//         <div className="relative mx-auto w-full overflow-hidden">
//           <div
//             className="flex transition-transform duration-300 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * imageWidth}px)`,
//             }}
//           >
//             {images.map((img, index) => (
//               <div
//                 key={index}
//                 className="slide-image w-full flex-shrink-0 px-10 md:w-1/3"
//               >
//                 <Image
//                   src={img}
//                   alt={`Slide ${index + 1}`}
//                   width={300}
//                   height={200}
//                   className="h-full w-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative mt-6 flex items-center justify-between px-10">
//           <button
//             onClick={handlePrev}
//             className={`mt-3 rounded-full bg-transparent p-3 text-[#C9AB81] ring-1 ring-[#C9AB81] transition ${
//               currentIndex === 0
//                 ? "cursor-not-allowed opacity-50"
//                 : "hover:bg-[#C9AB81] hover:text-black"
//             }`}
//             disabled={currentIndex === 0}
//           >
//             <ArrowLeft className="h-6 w-6" />
//           </button>
//           <div className="flex justify-center gap-2">
//             {images.map((_, index) => (
//               <div
//                 key={index}
//                 className={`h-1 w-1 rotate-45 transition-all ${
//                   currentIndex === index ? "bg-black" : "bg-[#C9AB81]"
//                 }`}
//               />
//             ))}
//           </div>
//           <button
//             onClick={handleNext}
//             className={`mt-3 rounded-full bg-transparent p-3 text-[#C9AB81] ring-1 ring-[#C9AB81] transition ${
//               currentIndex >= images.length - imagesPerView
//                 ? "cursor-not-allowed opacity-50"
//                 : "hover:bg-[#C9AB81] hover:text-black"
//             }`}
//             disabled={currentIndex >= images.length - imagesPerView}
//           >
//             <ArrowRight className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Highlights;
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Highlights() {
  return (
    <section className="h-full w-full bg-[#070D0F] px-16 py-12 md:px-40 md:py-20">
      <div className="flex flex-col items-center justify-center gap-16 md:gap-28">
        <div className="flex flex-col items-center justify-center gap-2">
          <h6 className="text-center font-open_sans text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
            what do we <br /> have for you
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
              <div className="relative p-1">
                <div className="absolute p-4 md:p-6">
                  <Image
                    src="/images/home/highlights/image1.png"
                    alt="frame 1"
                    width={500} // specify width
                    height={300} // specify height
                  />
                </div>
                <Image
                  src="/images/home/highlights/f1.png"
                  alt="frame 1"
                  width={500} // specify width
                  height={300} // specify height
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="relative p-1">
                <div className="absolute p-5 md:p-10">
                  <Image
                    src="/images/home/highlights/image2.png"
                    alt="frame 1"
                    width={500} // specify width
                    height={300} // specify height
                  />
                </div>
                <Image
                  src="/images/home/highlights/f2.png"
                  alt="frame 2"
                  width={500}
                  height={300}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="relative p-1">
                <div className="absolute p-4 md:p-6">
                  <Image
                    src="/images/home/highlights/image3.png"
                    alt="frame 1"
                    width={500} // specify width
                    height={300} // specify height
                  />
                </div>
                <Image
                  src="/images/home/highlights/f3.png"
                  alt="frame 3"
                  width={500}
                  height={300}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="relative p-1">
                <div className="absolute p-5 md:p-10">
                  <Image
                    src="/images/home/highlights/image2.png"
                    alt="frame 1"
                    width={500} // specify width
                    height={300} // specify height
                  />
                </div>
                <Image
                  src="/images/home/highlights/f2.png"
                  alt="frame 2"
                  width={500}
                  height={300}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="relative p-1">
                <div className="absolute p-4 md:p-6">
                  <Image
                    src="/images/home/highlights/image1.png"
                    alt="frame 1"
                    width={500} // specify width
                    height={300} // specify height
                  />
                </div>
                <Image
                  src="/images/home/highlights/f1.png"
                  alt="frame 1"
                  width={500} // specify width
                  height={300} // specify height
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="relative p-1">
                <div className="absolute p-5 md:p-10">
                  <Image
                    src="/images/home/highlights/image2.png"
                    alt="frame 1"
                    width={500} // specify width
                    height={300} // specify height
                  />
                </div>
                <Image
                  src="/images/home/highlights/f2.png"
                  alt="frame 2"
                  width={500}
                  height={300}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="relative p-1">
                <div className="absolute p-4 md:p-6">
                  <Image
                    src="/images/home/highlights/image3.png"
                    alt="frame 1"
                    width={500} // specify width
                    height={300} // specify height
                  />
                </div>
                <Image
                  src="/images/home/highlights/f3.png"
                  alt="frame 3"
                  width={500}
                  height={300}
                />
              </div>
            </CarouselItem>

            {/* Add more items here as needed */}
          </CarouselContent>
          <CarouselPrevious className="border-[#0E171A]" />
          <CarouselNext className="border-[#0E171A]" />
        </Carousel>
      </div>
    </section>
  );
}
