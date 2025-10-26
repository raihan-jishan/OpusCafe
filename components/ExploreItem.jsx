import { HeroAnimation } from "@/global/Animation";
import { BiSolidDrink } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiDrinks2Line } from "react-icons/ri";
import { FoodCard } from "./ui/card";
import Heading from "./ui/heading";
const ExploreItem = () => {
  return (
    <main className="bg-gray-50 text-black mt-20 p-10 ">
      <HeroAnimation>
        <Heading label={" Food category"} />

        <div className="flex items-center justify-center gap-5 mt-10 max-lg:flex-col">
          <FoodCard
            title={"fast food"}
            description={
              "Craving a classic burger? Juicy, freshly grilled with crisp lettuce..."
            }
            imageUrl={
              "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRyaW5rJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
            }
            customBg={"bg-gray-400/90 text-gray-950  "}
            bgWidth={"w-[50%] max-lg:w-[70%]"}
            icon={<IoFastFoodOutline size={30} />}
          />
          <FoodCard
            title={"drinks"}
            description={
              "Refresh with a crisp, fizzy cola—perfectly sweet and always satisfying!"
            }
            imageUrl={
              "https://plus.unsplash.com/premium_photo-1669905375164-388815c9dcf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvZmZlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
            }
            customBg={"bg-amber-500/80 text-slate-900"}
            bgWidth={"w-[35%] max-lg:w-[50%]"}
            icon={<RiDrinks2Line size={30} />}
          />
          <FoodCard
            title={"soft drinks"}
            description={
              "Refresh with a crisp, fizzy cola—perfectly sweet and always satisfying!"
            }
            imageUrl={
              "https://images.unsplash.com/photo-1617108126666-3b4f0251913a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
            }
            customBg={" bg-amber-400/70 text-gray-950"}
            bgWidth={"w-[52%] max-lg:w-[80%]"}
            icon={<BiSolidDrink size={30} />}
          />
        </div>
      </HeroAnimation>
    </main>
  );
};

export default ExploreItem;
