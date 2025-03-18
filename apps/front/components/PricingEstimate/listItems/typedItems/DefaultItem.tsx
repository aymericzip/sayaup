"use client";

import { DefaultSection } from "@components/PricingEstimate/estimateContent";
import React, { Dispatch, SetStateAction } from "react";
import { ItemLayout } from "../ItemLayout";
import { EstimateSectionType, ItemWrapper } from "../ItemWrapper";
import { EstimateContent } from "@components/PricingEstimate/PricingEstimateContext";

interface DefaultItemProps {
  section: DefaultSection & EstimateContent;
  setSection: Dispatch<SetStateAction<EstimateSectionType>>;
  level: number;
}

export const DefaultItem = ({
  section,
  setSection,
  level,
}: DefaultItemProps) => {
  return (
    <ItemLayout level={level} section={section}>
      {section.subsection?.map((subsection, index) => (
        <ItemWrapper level={level + 1} section={subsection} key={index} />
      ))}
    </ItemLayout>
  );
};
