import { MaxHeightSmoother } from "@components/UI/MaxHeightSmoother";
import React, { HTMLAttributes, ReactNode } from "react";
import { Variants, motion } from "framer-motion";

interface VerticalSubsectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
  isHidden: boolean;
}

const subsectionVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const VerticalSubsection = ({
  title,
  children,
  isHidden,
  ...props
}: VerticalSubsectionProps) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={subsectionVariants}
    >
      <div className="box flex flex-col h-full cursor-pointer" {...props}>
        <h4 className="w-full p-2 text-xl">{title}</h4>
        <MaxHeightSmoother isHidden={isHidden}>{children}</MaxHeightSmoother>
      </div>
    </motion.div>
  );
};
