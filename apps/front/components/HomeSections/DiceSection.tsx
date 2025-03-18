"use client";

import React from "react";
import { Section, SectionType } from "../UI/Section";
import { DiceScene } from "@components/DiceScene";

export const DiceSection = () => {
  return (
    <Section type={SectionType.PRIMARY} id="dice" className="overflow-visible">
      <div className="w-screen md:w-[200vw] h-[80vh] translate-x-0 md:-translate-x-[70vw]">
        <DiceScene />
      </div>
    </Section>
  );
};
