import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#070d0f] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#070d0f]">
        <h2 className="font-cormorant text-center text-5xl text-white md:left-[15%] md:text-8xl">
          The Tugra
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#070d0f] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-cormorant max-w-[500px] text-center text-5xl text-white md:text-start md:text-7xl">
              From Passion
              <br />
              to Perfection{" "}
            </h1>
            <p className="font-roboto max-w-[450px] text-center font-light leading-[160%] text-white md:text-start">
              What began as a vision—to redefine the dining experience—has
              evolved into <strong>Tugra</strong>, a culinary sanctuary where
              flavors are brought to life with artistry and passion. Founded on
              a deep commitment to excellence, Tugra was born from the desire to
              craft more than meals—we create unforgettable experiences. <br />
              From our humble roots to becoming a cherished destination for food
              enthusiasts, our dedication to quality, innovation, and warm
              hospitality has remained steadfast. Every ingredient is
              thoughtfully chosen, every dish is crafted with care, and every
              bite is a celebration of refined taste. <br />
              At Tugra, we don`t just serve food—we tell stories through flavor.
              As we continue to grow, our mission is unwavering: to fuse
              culinary artistry with exceptional taste and deliver a dining
              journey like no other.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
