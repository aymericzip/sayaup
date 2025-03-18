import { useContent } from "@i18n/useContent";
import React from "react";
import { estimateLanguageContent } from "./estimateContent";
import { ItemWrapper } from "./listItems/ItemWrapper";
import { PricingEstimateContext } from "./PricingEstimateContext";

interface PricingEstimateProps {
  language: string;
}

export const PricingEstimate = ({ language }: PricingEstimateProps) => {
  const { content: estimateContent } = useContent(
    language,
    estimateLanguageContent
  );

  return (
    <PricingEstimateContext>
      {estimateContent.service.map((service, index) => (
        <ItemWrapper level={0} section={service} key={index} />
      ))}
      {/* <button className="m-auto">Get estimation</button> */}
    </PricingEstimateContext>
  );
};
