import React from "react";

interface MaxHeightSmootherProps {
  children: React.ReactNode;
  isHidden: boolean;
  minWidth?: number;
}

export const MaxWidthSmoother = ({
  children,
  isHidden,
  minWidth = 0,
}: MaxHeightSmootherProps) => {
  return (
    <div
      className={`overflow-x-hidden grid grid-cols-[0fr]  ${
        isHidden ? "overflow-y-hidden" : "overflow-y-auto grid-cols-[1fr]"
      } transition-all duration-700 ease-in-out relative`}
      aria-hidden={isHidden}
    >
      <div
        style={{
          minWidth: `${minWidth}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
