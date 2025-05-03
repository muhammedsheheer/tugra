import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#070d0f] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold text-white md:leading-[66px] lg:text-6xl">
                Welcome to Tugra <br />A Symphony of Flavors
              </h1>
              <p className="font-manrope font-normal text-white">
                At Tugra, every dish is a culinary masterpiece, thoughtfully
                crafted with passion and precision. From the finest
                hand-selected ingredients to meticulously developed recipes, we
                deliver a dining experience where artistry meets flavor. Whether
                you`re enjoying a signature entrée or delighting in a luxurious
                dessert, every bite reflects our commitment to quality,
                creativity, and culinary brilliance.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <Image
              src="/images/about-us/2.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
