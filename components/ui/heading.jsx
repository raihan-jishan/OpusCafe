const Heading = ({ label, desciption }) => {
  return (
    <div className="flex items-center justify-center  max-lg:flex-col-reverse ">
      <h1
        className={`relative   text-center  m-2 p-2

          text-4xl font-semibold leading-[84px] tracking-[-0.03em] max-lg:leading-normal
    
      `}
      >
        {label}
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-0 w-[80%] mt-2 border-b-4   border-gray-400"></span>
      </h1>
    </div>
  );
};

export default Heading;
