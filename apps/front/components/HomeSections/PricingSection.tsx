import React from "react";
import { Section } from "../UI/Section";
import { pricingLanguageContent } from "./pricingSectionContent";
import { useContent } from "@i18n/useContent";
import { PricingEstimate } from "@components/PricingEstimate";

interface PricingSectionProps {
  language: string;
}

export const PricingSection = ({ language }: PricingSectionProps) => {
  const { content: pricingContent } = useContent(
    language,
    pricingLanguageContent
  );

  return (
    <Section id="pricing">
      <h2>{pricingContent.title}</h2>
      <PricingEstimate language={language} />
    </Section>
  );
};
