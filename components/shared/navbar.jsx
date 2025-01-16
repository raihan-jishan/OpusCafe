"use client";
import { navLinks } from "@/constants";
import { useEffect, useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import Brand from "../ui/brand";
import CartBtn from "../ui/cartBtn";
import NavBtn from "../ui/navBtn";
import NavLink from "../ui/navLink";
const Navbar = () => {
  const [nav, setNav] = useState("");
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  // handleNav function
  const handleNav = () => setNav(!nav);

  // closeNav function
  const closeNav = () => setNav(false);

  // useEffect hook
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#f6f6f6");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="bg-white p-2 fixed w-full z-20 top-0 start-0   max-lg:p-0  "
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Brand />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex gap-5 items-center justify-center ">
            <div className="max-lg:hidden">
              <CartBtn />
            </div>
            <NavBtn />
          </div>

          <button
            type="button"
            className="inline-flex items-center p-2 w-12 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            {nav ? (
              
              <IoCloseOutline size={40} onClick={closeNav} />
            ) : (
              <HiBars2 size={40} onClick={handleNav} />
            )}
          </button>
        </div>
        <div
          className={
            nav
              ? "items-center justify-between  w-full md:flex md:w-auto md:order-1"
              : "items-center justify-between  hidden  w-full md:flex md:w-auto md:order-1"
          }
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   max-lg:bg-[#f6f6f6]/95 ">
            {navLinks.map((item, index) => {
              return <NavLink key={index} label={item.name} bgColor={color} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
