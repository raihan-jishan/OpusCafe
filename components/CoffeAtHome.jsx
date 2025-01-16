import Wrapper from "@/global/wrapper";
import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa6";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { Button, buttonVariants } from "./ui/button";

const CofeAtHome = () => {
  return (
    <Wrapper className={"mt-5 p-5 bg-gray-200"}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Instant Coffee At Your Home
          </h1>
          <p className="max-w-2xl mb-6   lg:mb-8 md:text-lg lg:text-xl font-semibold text-gray-900">
            download our mobile apps
          </p>
          <div className="flex gap-5 max-lg:flex-col">
            <Button className={buttonVariants({ className: "p-8 px-12  rounded-full" })}>
            <FaGooglePlay size={30} />{" "}
              Play Store
            
            </Button>
            <Button className={buttonVariants({ className: "p-8 px-12  rounded-full" })}>
            <IoLogoAppleAppstore  size={30} />{" "}
             IOS Store
            
            </Button>
          </div>
        </div>
        <div className="  lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/assets/download-app.png"
            alt="mockup"
            width={900}
            height={500}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default CofeAtHome;
