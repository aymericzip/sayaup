import React from "react";
import { Landing } from "../Landing";
import { Section, SectionType } from "../UI/Section";

interface LandingSectionProps {
  language: string;
}

export const LandingSection = ({ language }: LandingSectionProps) => {
  return (
    <Section type={SectionType.LANDING} id="landing">
      <Landing language={language} />
    </Section>
  );
};
