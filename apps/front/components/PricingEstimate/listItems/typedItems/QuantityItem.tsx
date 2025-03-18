"use client";

import {
  PricingEstimate,
  QuantitySection,
} from "@components/PricingEstimate/estimateContent";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ItemLayout } from "../ItemLayout";
import { EstimateSectionType, ItemWrapper } from "../ItemWrapper";
import {
  EstimateContent,
  EstimateSection,
} from "@components/PricingEstimate/PricingEstimateContext";

export interface QuantityItemProps {
  section: QuantitySection & EstimateContent;
  setSection: Dispatch<SetStateAction<EstimateSectionType>>;
  level: number;
}

export const QuantityItem = ({
  section,
  setSection,
  level,
}: QuantityItemProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const estimate: EstimateSection["estimate"] = {};

    let pricing: PricingEstimate = {};
    pricing = section.pricingPerUnit ?? {};

    Object.keys(pricing).forEach((key) => {
      const pricingEl = {
        extraDays: pricing[key].extraDays ?? 0 * value,
        errorMargin: pricing[key].errorMargin ?? 0 * value,
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
  }, [value]);

  return (
    <ItemLayout
      level={level}
      section={section}
      rightParam={
        <input
          type="number"
          placeholder={section.title}
          className="w-16"
          defaultValue={value}
          min={0}
          onBlur={(e) => setValue(Math.max(e.currentTarget.valueAsNumber, 0))}
        />
      }
    >
      {section.subsection?.map((subsection, index) => (
        <ItemWrapper level={level + 1} section={subsection} key={index} />
      ))}
    </ItemLayout>
  );
};
