import { HeroAnimation } from "@/global/Animation";
import { BiDollar } from "react-icons/bi";
import { LuCupSoda } from "react-icons/lu";
import { FeatureCard } from "./ui/card";
const Feature = () => {
  return ( 
  <HeroAnimation>
      <div className="-mt-[18rem]  max-lg:mt-5 gap-1 w-[60%] grid grid-cols-1 lg:grid-cols-3        max-lg:grid-cols-1 max-lg:w-[100%] ">
      <FeatureCard
        icon={<LuCupSoda size={40} />}
        label={"24/7 Free Delivery"}
      />
      <FeatureCard icon={<BiDollar size={40} />} label={"100% cheap  rate"} />
      <FeatureCard
        icon={<LuCupSoda size={40} />}
        label={"customizable coffe"}
      />
    </div>
  </HeroAnimation>
  );
};

export default Feature;
