import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  isChecked: boolean;
  toggleSwitch: (isChecked: boolean) => void;
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export const Toggle = ({ isChecked, toggleSwitch, ...props }: ToggleProps) => {
  return (
    <div
      data-ison={isChecked}
      onClick={() => toggleSwitch(isChecked)}
      className={`relative h-8 w-12 p-1 bg-primary bg-opacity-50 backdrop-blur display flex rounded-full cursor-pointer items-center transition-colors m-auto ${
        isChecked ? "justify-end" : "justify-start bg-slate-500"
      }`}
      {...props}
    >
      <motion.div
        layout
        transition={spring}
        className="h-full aspect-square rounded-full bg-white shadow-md"
      />
    </div>
  );
};
