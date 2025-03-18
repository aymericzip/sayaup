"use client";

import React, { useState } from "react";
import { Pricer, SectionChoice, SubsectionType } from "../estimateContent";
import { EstimateContent } from "../PricingEstimateContext";
import { DefaultItem } from "./typedItems/DefaultItem";
import { ChoiceListItem } from "./typedItems/ChoiceListItem";
import { BooleanItem } from "./typedItems/BooleanItem";
import { QuantityItem } from "./typedItems/QuantityItem";
import { ScaleItem } from "./typedItems/ScaleItem";
import { EnumerationItem } from "./typedItems/EnumerationItem";

interface ItemWrapperProps {
  level: number;
  section: SectionChoice;
  sectionId?: string;
}

export type EstimateSectionType = SectionChoice & EstimateContent;

export const ItemWrapper = ({ level, section }: ItemWrapperProps) => {
  const [estimateSection, setEstimateSection] = useState<EstimateSectionType>({
    estimate: {},
    ...section,
  });

  switch (estimateSection.type) {
    case SubsectionType.DEFAULT || undefined:
      return (
        <DefaultItem
          section={estimateSection}
          setSection={setEstimateSection}
          level={level}
        />
      );

    case SubsectionType.CHOICE_LIST:
      return (
        <ChoiceListItem
          section={estimateSection}
          setSection={setEstimateSection}
          level={level}
        />
      );

    case SubsectionType.BOOLEAN:
      return (
        <BooleanItem
          section={estimateSection}
          setSection={setEstimateSection}
          level={level}
        />
      );

    case SubsectionType.QUANTITY:
      return (
        <QuantityItem
          section={estimateSection}
          setSection={setEstimateSection}
          level={level}
        />
      );

    case SubsectionType.SCALE:
      return (
        <ScaleItem
          section={estimateSection}
          setSection={setEstimateSection}
          level={level}
        />
      );

    case SubsectionType.ENUMERATION:
      return (
        <EnumerationItem
          section={estimateSection}
          setSection={setEstimateSection}
          level={level}
        />
      );

    default:
      return <>Unknow Section</>;
  }
};
