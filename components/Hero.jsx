import { HeroAnimation } from "@/global/Animation";
import Image from "next/image";
import HeroHeading from "./ui/heroHeading";
import Feature from "./Feature";

const Hero = () => {
  return (
    <main className="bg-gray-200  ">
      <HeroAnimation>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 -mt-56 max-lg:-mt-8  max-lg:flex max-lg:flex-col-reverse">
          <HeroHeading />
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={"/assets/hero.png"}
              className="max-lg:-mt-36 -mt-28"
              width={500}
              height={100}
              alt="mockup"
            />
          </div>
        </div>
      </HeroAnimation>
    </main>
  );
};

export default Hero;
