import Image from "next/image";
import HeroHeading from "./ui/heroHeading";

const Hero = () => {
  return (
    <main className="bg-gray-200   ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 -mt-56 max-lg:-mt-0   max-lg:flex max-lg:flex-col-reverse">
        <HeroHeading />
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={"/assets/hero.png"}
            className="max-lg:-mt-32"
            width={500}
            height={100}
            alt="mockup"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
