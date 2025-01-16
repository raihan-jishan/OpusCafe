import Image from "next/image";

const Brand = () => {
  return (
    <div className="flex gap-2  max-lg:block">
      <Image
        src={"/assets/logo.png"}
        width={100}
        height={100}
        className=" w-[20%] max-lg:w-[30%] mix-blend-multiply bg-gray-200 "
        alt="coffe website logo was not found! "
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap  text-black max-lg:text-xl">
        OpusCafé
      </span>
    </div>
  );
};

export default Brand;
