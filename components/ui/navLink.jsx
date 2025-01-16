import Link from "next/link";

const NavLink = ({ label, bgColor }) => {
  return (
    <li>
      <Link
        href="#"
        className={`block py-2 px-3 text-black font-semibold rounded   md:p-0 hover:underline transition-all  bg-gray-500 text-center mt-6   `}
        style={{ backgroundColor: `${bgColor} ` }}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
