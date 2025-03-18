import React, { HTMLAttributes } from "react";

interface BurgerProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const Burger = ({ isActive = false, ...props }) => {
  return (
    <div className="relative ml-auto mr-3 w-10 h-10 cursor-pointer" {...props}>
      <>
        <span
          className={`absolute top-1/2 block w-8 h-[2px] bg-gray-800 transition duration-300 ${
            isActive ? "-rotate-[45deg]" : "rotate-0"
          }`}
        ></span>
        <span
          className={`absolute top-1/2 block w-8 h-[2px] bg-gray-800 -translate-y-2 transition duration-300 ${
            isActive ? "opacity-0 -translate-y-3" : "opacity-100"
          }`}
        ></span>
      </>
      <span
        className={`absolute top-1/2 block w-8 h-[2px] bg-gray-800 transition duration-300 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <>
        <span
          className={`absolute top-1/2 block w-8 h-[2px] bg-gray-800 transition duration-300 ${
            isActive ? "rotate-[45deg]" : "rotate-0"
          }`}
        ></span>
        <span
          className={`absolute top-1/2 block w-8 h-[2px] bg-gray-800 translate-y-2 transition duration-300 ${
            isActive ? "opacity-0 translate-y-3" : "opacity-100"
          }`}
        ></span>
      </>
    </div>
  );
};
