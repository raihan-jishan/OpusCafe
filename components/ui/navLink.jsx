"use client";
import Link from "next/link"; 

const NavLink = ({ path, label, closeNav }) => {
  

  return (
    <Link
      href={path ? path : "/"}
      onClick={closeNav}
      className={`block py-2 px-3 font-semibold md:p-0 transition-all duration-300 text-center mt-6 
        text-black border-b-2 border-transparent hover:border-black`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
