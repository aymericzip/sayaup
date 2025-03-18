import React, { HTMLAttributes, ReactNode } from "react";

export enum SectionType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  LANDING = "landing",
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  type?: SectionType;
  className?: string;
}

export const Section = ({
  children,
  type = SectionType.PRIMARY,
  className = "",
  ...props
}: SectionProps) => {
  let sectionStyle =
    type + " relative w-screen py-8 overflow-hidden " + className;

  if (type === SectionType.LANDING) {
    sectionStyle += " gradient-bg pt-[0rem] min-h-screen";
  } else if (type === SectionType.SECONDARY) {
    sectionStyle += " bg-fushia-100";
  }

  return (
    <section className={sectionStyle} {...props}>
      {children}
    </section>
  );
};
