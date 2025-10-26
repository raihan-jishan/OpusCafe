"use client";
import { motion } from "framer-motion";
 const Heading = ({ label, description, widthCustom }) => {
  return (
    <div>
      <motion.h2
        className="text-4xl font-semibold text-center text-gray-900 dark:text-white  relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-32 after:h-[4px] after:bg-slate-500 after:transform after:-translate-x-1/2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {label}
      </motion.h2>
      <motion.p
        className={`mt-4 text-lg font-medium font-openSans text-gray-600 text-center dark:text-gray-400  m-auto ${
          widthCustom ? "" : "w-[40%]"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
  );
};
export default Heading;
