import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/image4.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="font-oswald max-w-[500px] text-center text-5xl text-[#fff] md:leading-[60px]">
            Join Us for an
            <br />
            Unforgettable Meal
          </h1>
          <p className="max-w-[450px] text-center font-[600] leading-[160%] text-[#ffff]">
            Whether it&rsquo;s an intimate dinner or a grand celebration, Tugra
            invites you to embark on an extraordinary culinary journey. From
            masterfully curated flavours to the finest hand-selected
            ingredients, every dish embodies our passion for excellence. Step
            into a dining experience where innovation meets tradition, and each
            bite tells a story of elegance, care, and unforgettable taste.
          </p>
          <Link href={"/table-booking"}>
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-[#fff] bg-transparent px-7 py-7 font-semibold uppercase text-[#fff] hover:bg-[#000]"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-[#fff] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
