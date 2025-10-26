import { FaGooglePlay } from "react-icons/fa6";
import { Button, buttonVariants } from "./button";
const HeroBtn = () => {
  return (
    <div className="flex items-center   gap-3 max-lg:flex-col">
     
      <Button className={buttonVariants({ className: "p-7 px-12  " })}>
        Download App
        <FaGooglePlay size={30} />{" "}
      </Button>
       <button className="border-b-2   border-b-black  m-3 mt-5 font-semibold text-2xl hover:scale-95 duration-300 transition-all">
        Order Now
       </button>
    </div>
  );
};

export default HeroBtn;
