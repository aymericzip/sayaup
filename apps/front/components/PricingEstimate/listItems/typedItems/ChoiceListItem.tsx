"use client";

import {
  ChoiceListSection,
  PricingEstimate,
} from "@components/PricingEstimate/estimateContent";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ItemLayout } from "../ItemLayout";
import { EstimateSectionType, ItemWrapper } from "../ItemWrapper";
import { SelectionList } from "@components/UI/SelectionList";
import {
  EstimateContent,
  EstimateSection,
} from "@components/PricingEstimate/PricingEstimateContext";

interface ChoiceListItemProps {
  section: ChoiceListSection & EstimateContent;
  setSection: Dispatch<SetStateAction<EstimateSectionType>>;

  level: number;
}

export const ChoiceListItem = ({
  section,
  setSection,
  level,
}: ChoiceListItemProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(
    section.choiceList[0].title
  );

  const items = section.choiceList.map((choice) => {
    return {
      title: choice.title,
      id: `${section.title}-${choice.title}`,
      children: <span>{choice.title}</span>,
    };
  });

  useEffect(() => {
    const estimate: EstimateSection["estimate"] = {};

    let pricing: PricingEstimate = {};
    pricing =
      section.choiceList.find((choice) => choice.title === selectedItem)
        ?.pricing ?? {};

    Object.keys(pricing).forEach((key) => {
      const pricingEl = {
        extraDays: pricing[key].extraDays ?? 0,
        errorMargin: pricing[key].errorMargin ?? 0,
        multiplier: pricing[key].multiplier ?? 1,
      };
      estimate[key] = {
        minExtraDays:
          pricingEl.extraDays - pricingEl.extraDays * pricingEl.errorMargin,
        maxExtraDays:
          pricingEl.extraDays + pricingEl.extraDays * pricingEl.errorMargin,
        multiplier: pricingEl.multiplier,
      };
    });

    setSection({
      ...section,
      estimate,
    });
  }, [selectedItem]);

  return (
    <ItemLayout
      level={level}
      section={section}
      rightParam={
        <SelectionList
          items={items}
          onChange={(value) => setSelectedItem(value)}
        />
      }
    >
      {section.subsection?.map((subsection, index) => (
        <ItemWrapper level={level + 1} section={subsection} key={index} />
      ))}
      {section.choiceList
        .find((choice) => choice.title === selectedItem)
        ?.subsection?.map((subsection, index) => (
          <ItemWrapper level={level + 1} section={subsection} key={index} />
        ))}
    </ItemLayout>
  );
};
