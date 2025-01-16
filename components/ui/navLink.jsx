import Link from "next/link";

const NavLink = ({ label, bgColor, path , closeNav}) => {
  return (
    <li>
      <Link
        href={path ? path : '/'}
        className={`block py-2 px-3 text-black font-semibold rounded   md:p-0 hover:underline transition-all  bg-gray-500 text-center mt-6   `}
        style={{ backgroundColor: `${bgColor} ` }}
        onClick={closeNav}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
