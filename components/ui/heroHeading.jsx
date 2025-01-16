import HeroBtn from "./heroBtn";
const HeroHeading = () => {
  return (
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ">
        Where Every Brew is a Masterpiece.
      </h1>
      <p className="max-w-2xl mb-6   text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500 font-semibold ">
        make your time little smoother! with one cup COFFE!
      </p>
      <HeroBtn />
    </div>
  );
};

export default HeroHeading;
