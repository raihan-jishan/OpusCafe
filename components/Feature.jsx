'use client';
import { HeroAnimation } from "@/global/Animation";
import { FeatureCard } from "@/components/ui/card";
import { CircleDollarSign, Coffee, CupSoda, History } from "lucide-react";
import useResponsiveSize from "@/hooks/useResponsiveSize";

const Feature = () => {
  const size = useResponsiveSize(30, 25);
  return (
    <HeroAnimation>
      <div className="grid grid-cols-3 gap-2 max-lg:grid-cols-2  ">
        <FeatureCard
          label={"24/7 Free Delivery"}
          icon={<History size={size} />}
        />
        <FeatureCard
          label={"100% cheap rate"}
          icon={<CircleDollarSign size={size} />}
        />
        <FeatureCard
          label={"customizable coffe"}
          icon={<CupSoda size={size} />}
        />
      </div>
    </HeroAnimation>
  );
};

export default Feature;
