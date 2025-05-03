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
              <h1 className="font-cormorant text-5xl font-semibold text-white md:leading-[66px] lg:text-6xl">
                Welcome to <br />
                Tugra Meathouse
              </h1>
              <p className="font-roboto font-normal text-white">
                At Tugra Meathouse, our first priority is to ensure that our
                guests spend time with their families in a comfortable, safe and
                delicious way and that we can turn their visit into a fun
                experience with our great food. In addition to all this, Tugra
                Meathouse presents our guests with unique local and
                international meats and seafood prepared by our Executive Chef
                and their team. In doing so, we are adding a fantastic culinary
                taste experience to our renowned hospitality, which positions
                Turkey among the most ambitious sectors worldwide. In each of
                our dishes, locally inspired flavors are skillfully prepared,
                bringing together traditional recipes with modern
                interpretations. The prominence of carefully selected local
                ingredients, fresh and thoughtfully chosen, is another notable
                feature. Head Chef creativity and experience ensure that each
                dish transforms into a culinary masterpiece.
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
