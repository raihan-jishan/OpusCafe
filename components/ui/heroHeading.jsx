import Feature from "../Feature";
import HeroBtn from "./heroBtn";
const HeroHeading = () => {
  return (
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mt-40 max-lg:mt-0">
        Where Every Brew is a Masterpiece.
      </h1>
      <p className="max-w-2xl mb-6   text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-500 font-medium ">
        make your time little smoother! with one cup COFFE!
      </p>
      <HeroBtn />
      <div className="mt-14">
        <Feature />
      </div>
    </div>
  );
};

export default HeroHeading;
