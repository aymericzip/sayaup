"use client";

import {
  PricingEstimate,
  ScaleSection,
} from "@components/PricingEstimate/estimateContent";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ItemLayout } from "../ItemLayout";
import { EstimateSectionType, ItemWrapper } from "../ItemWrapper";
import {
  EstimateContent,
  EstimateSection,
} from "@components/PricingEstimate/PricingEstimateContext";

interface ScaleItemProps {
  section: ScaleSection & EstimateContent;
  setSection: Dispatch<SetStateAction<EstimateSectionType>>;
  level: number;
}

export const ScaleItem = ({ section, setSection, level }: ScaleItemProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const estimate: EstimateSection["estimate"] = {};

    let pricing: PricingEstimate = {};
    pricing = section.scale[value]?.pricing ?? {};

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
  }, [value]);

  return (
    <ItemLayout level={level} section={section}>
      <div className="w-full">
        <div className="w-1/2 min-w-[200px] m-auto mt-3">
          <input
            type="range"
            className="w-full m-center"
            min={0}
            max={Object.keys(section.scale).length - 1}
            defaultValue={0}
            onChange={(e) => setValue(e.currentTarget.valueAsNumber)}
          />
        </div>
        <span className="block w-full text-center text-sm text-gray">
          {section.scale[value].label}
        </span>
      </div>
      {section.subsection?.map((subsection, index) => (
        <ItemWrapper level={level + 1} section={subsection} key={index} />
      ))}
    </ItemLayout>
  );
};
