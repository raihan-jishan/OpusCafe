import Image from "next/image";

const Brand = () => {
  return (
    <div className="flex gap-2  max-lg:block">
      <Image
        src={"/assets/logo.png"}
        width={100}
        height={100}
        className=" w-[20%] max-lg:w-[30%]  "
        alt="coffe website logo was not found! "
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap  text-black max-lg:text-xl">
        OpusCafé
      </span>
    </div>
  );
};

export default Brand;

export const FooterLogo = () => {
  return (
    <div className=" ">
     <Image
        src={"/assets/logo.png"}
        width={500}
        height={100}
        className="  w-[60%] bg-orange-200/20 border-2 border-black p-1 rounded-2xl mix-blend-multiply max-lg:w-[20%] "
        alt="coffe website logo was not found! "
      />
    </div>
  );
};
