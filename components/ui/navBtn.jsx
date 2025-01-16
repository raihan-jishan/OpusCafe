import { FiCoffee } from "react-icons/fi";
import { Button, buttonVariants } from "./button";
const NavBtn = () => {
  return (
    <Button
      className={buttonVariants({
        className: "p-6 px-8  max-lg:p-5 max-lg:px-3 ",
      })}
    >
      Get free delivary{" "}
      <div className="max-lg:hidden">
        <FiCoffee size={30} />
      </div>{" "}
    </Button>
  );
};

export default NavBtn;
