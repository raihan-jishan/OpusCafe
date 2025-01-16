import { HeroAnimation } from "@/global/Animation";
import Wrapper from "@/global/wrapper";
import { FiCoffee } from "react-icons/fi";
import { Button, buttonVariants } from "./ui/button";
import { ProductCard } from "./ui/card";
import Heading from "./ui/heading";

const BestSellingCofe = () => {
  return (
    <Wrapper className={"mt-20 bg-orange-50"} id={"categories"}>
      <HeroAnimation>
        <Heading label={"#Best Selling Coffee"} desciption={""} />

        <div className="flex items-center justify-between max-lg:flex-col">
          <ProductCard
            label={"Double Espresso"}
            star={"4.5"}
            image={"/assets/coffe-1.png"}
            price={"$49"}
            sellingPoint={"1"}
          />
          <ProductCard
            label={"Velvet Brew"}
            star={"4.8"}
            image={"/assets/coffe-2.png"}
            price={"$59"}
            sellingPoint={"1"}
          />
          <ProductCard
            label={"Midnight Mocha"}
            star={"4.5"}
            image={"/assets/coffe-3.webp"}
            price={"$65"}
            sellingPoint={"1"}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            className={buttonVariants({ className: "p-8 px-8 rounded-full  " })}
          >
            browse more coffe
            <FiCoffee size={30} />{" "}
          </Button>
        </div>
      </HeroAnimation>
    </Wrapper>
  );
};

export default BestSellingCofe;
