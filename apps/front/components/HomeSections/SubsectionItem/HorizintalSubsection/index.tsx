import { MaxWidthSmoother } from "@components/UI/MaxWidthSmoother";
import React, { HTMLAttributes, ReactNode } from "react";

interface HorizintalSubsectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
  isHidden: boolean;
  isfocused?: boolean;
}

export const HorizintalSubsection = ({
  title,
  children,
  isHidden,
  isfocused,
  ...props
}: HorizintalSubsectionProps) => {
  return (
    <div
      className={`box flex flex-row h-full cursor-pointer ${
        isfocused ? "scale-105 z-10 shadow-xl" : ""
      }`}
      {...props}
    >
      <h4 className="text-vertical rotate-180 px-2 lg:px-3 text-3xl">
        {title}
      </h4>
      <MaxWidthSmoother isHidden={isHidden}>{children}</MaxWidthSmoother>
    </div>
  );
};
