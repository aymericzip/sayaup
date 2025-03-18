import React, { HTMLAttributes } from "react";

interface MaxHeightSmootherProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isHidden: boolean;
  minHeight?: number;
}

export const MaxHeightSmoother = ({
  children,
  isHidden,
  minHeight = 0,
  ...props
}: MaxHeightSmootherProps) => {
  return (
    <div
      className={`overflow-y-hidden grid grid-rows-[0fr] transition-all duration-700 ease-in-out relative ${
        isHidden ? "overflow-x-hidden" : "overflow-x-auto grid-rows-[1fr]"
      }`}
      aria-hidden={isHidden}
      {...props}
    >
      <div
        style={{
          minHeight: `${minHeight}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
