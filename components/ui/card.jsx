import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { Button, buttonVariants } from "./button";
export const FeatureCard = ({ icon, label }) => {
  return (
    <div className="p-5 flex gap-0 items-center justify-center   rounded-full  bg-gray-500/10 max-lg:bg-transparent max-lg:shadow-none max-lg:border-2 shadow-md">
      <span>{icon}</span>
      <h1 className="text-xl font-semibold mt-1 max-lg:text-lg">{label} </h1>
    </div>
  );
};
// food image card
export const FoodCard = ({
  imageUrl,
  title,
  description,
  customBg,
  bgWidth,
  icon,
}) => {
  return (
    <article className="max-w-xl relative overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:scale-105 mt-10  cursor-pointer ">
      <Image
        alt=""
        src={imageUrl}
        width={500}
        height={200}
        className=" absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <a href="#">
            <h3
              className={`mt-0.5 text-2xl  font-semibold capitalize       ${bgWidth} 
              ${customBg} flex gap-1  p-2  rounded-full
              `}
            >
              {title} {icon}
            </h3>
            <h2
              className={`${customBg} p-1 rounded-md font-semibold mt-1 text-md  `}
            >
              {description}
            </h2>
          </a>
        </div>
      </div>
    </article>
  );
};
// product  card
export const ProductCard = ({ image, star, sellingPoint, label, price }) => {
  return (
    <div className="relative m-10 flex w-full max-w-xl flex-col overflow-hidden rounded-lg border border-gray-100 bg-orange-200 shadow-md  ">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <Image
          className="object-cover "
          src={image ? image : "/assets/coffe-1.png"}
          width={1000}
          height={500}
          alt="product image"
        />

        <span className="absolute top-0 -left-2 m-2 rounded-full   px-2 p-2 text-center   font-semibold text-xl  border border-black bg-black text-orange-200  ">
          # {sellingPoint} Selling
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-2xl font-semibold  tracking-tight text-black">
            {label}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">{price}</span>
          </p>
          <div className="flex items-center">
            <span
              className="mr-2 ml-3   bg-gray-800/20  border-2 border-black rounded-xl  text-xl
            max-lg:text-xl
            font-semibold flex gap-1 p-2 "
            >
              <FaStar className="text-xl" /> {star}
            </span>
          </div>
        </div>

        <Button
          className={buttonVariants({
            className: "p-6 px-24   rounded-xl font-semibold",
          })}
        >
          Order Now
          <FaRegHeart size={50}  />{" "}
        </Button>
      </div>
    </div>
  );
};
// review card
export const ReviewCard = ({ name, handle, review, Avatar }) => {
  return (
    <div className="flex flex-col justify-between rounded-3xl      text-black p-5 shadow-sm max-w-sm mx-auto mt-24 bg-orange-200">
      <div className="mt-6 flex items-center gap-6 bg-gray-800/10 p-2">
        <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
          <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
            <Image
              alt=""
              src={Avatar}
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              className="inline-block "
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h2 className="leading-relaxed tracking-wide text-xl text-black font-semibold">
            {name}
          </h2>
          <p className="text-[1rem] leading-relaxed tracking-wide text-black flex gap-3  ">
            <CiTwitter size={25} className="text-primary " /> @{handle}
          </p>
        </div>
      </div>
      <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-black">
        {review}
      </p>
    </div>
  );
};
