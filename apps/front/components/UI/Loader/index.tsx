import React, { ReactNode } from "react";

interface LoaderProps {
  width?: number;
  className?: string;
  children?: ReactNode;
}

export const Loader = ({ width = 25, className, children }: LoaderProps) => {
  const spanStyle =
    "absolute bg-gradient-to-r from-primary to-secondary rounded-full w-1/2 h-1/2 block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

  return (
    <div
      className={`rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{ width: `${width}rem`, height: `${width}rem` }}
    >
      <div className="relative w-full h-full animate-spin">
        <span className={`${spanStyle} blur-2xl`}></span>
        <span className="absolute bg-white rounded-full w-2/5 h-2/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md"></span>
      </div>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {children}
      </span>
    </div>
  );
};
