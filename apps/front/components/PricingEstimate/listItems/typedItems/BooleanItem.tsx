"use client";

import {
  BooleanSection,
  PricingEstimate,
} from "@components/PricingEstimate/estimateContent";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ItemLayout } from "../ItemLayout";
import { EstimateSectionType, ItemWrapper } from "../ItemWrapper";
import { Toggle } from "@components/UI/Toggle";
import { MaxHeightSmoother } from "@components/UI/MaxHeightSmoother";
import {
  EstimateContent,
  EstimateSection,
  Pricer,
} from "@components/PricingEstimate/PricingEstimateContext";

interface BooleanItemProps {
  section: BooleanSection & EstimateContent;
  setSection: Dispatch<SetStateAction<EstimateSectionType>>;
  level: number;
}

export const BooleanItem = ({
  section,
  setSection,
  level,
}: BooleanItemProps) => {
  const [sectionState, setSectionState] = useState(false);
  const [isSectionTrue, setIsSectionTrue] = useState(false);
  const [isSectionFalse, setIsSectionFalse] = useState(true);

  const isSectionTrueContent = (section.true?.subsection ?? []).length > 0;
  const isSectionFalseContent = (section.false?.subsection ?? []).length > 0;
  const isSectionTrueAndFalseContent =
    isSectionTrueContent && isSectionFalseContent;

  const isExpended =
    (isSectionTrue && isSectionTrueContent) ||
    (isSectionFalse && isSectionFalseContent);

  const toggleSwitch = (isChecked: boolean) => {
    setSectionState(!isChecked);
    if (isSectionTrueAndFalseContent) {
      if (isChecked) {
        setIsSectionTrue(!isChecked);
      } else {
        setIsSectionFalse(isChecked);
      }
    } else {
      setIsSectionTrue(!isChecked);
      setIsSectionFalse(isChecked);
    }
  };

  useEffect(() => {
    if (isSectionTrueAndFalseContent)
      setTimeout(() => {
        if (sectionState) {
          setIsSectionTrue(sectionState);
        } else {
          setIsSectionFalse(!sectionState);
        }
      }, 400);
  }, [sectionState]);

  useEffect(() => {
    const estimate: EstimateSection["estimate"] = {};

    let pricing: PricingEstimate = {};
    if (sectionState) {
      pricing = section.true?.pricing ?? {};
    } else {
      pricing = section.false?.pricing ?? {};
    }

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
  }, [sectionState]);

  return (
    <ItemLayout
      level={level}
      section={section}
      onContentClick={() => toggleSwitch(sectionState)}
      rightParam={
        <Toggle
          isChecked={sectionState}
          toggleSwitch={toggleSwitch}
          aria-expanded={isExpended}
        />
      }
    >
      <MaxHeightSmoother isHidden={!isSectionTrue}>
        {section.true?.subsection?.map((subsection, index) => (
          <ItemWrapper level={level + 1} section={subsection} key={index} />
        ))}
      </MaxHeightSmoother>
      <MaxHeightSmoother isHidden={!isSectionFalse}>
        {section.false?.subsection?.map((subsection, index) => (
          <ItemWrapper level={level + 1} section={subsection} key={index} />
        ))}
      </MaxHeightSmoother>
    </ItemLayout>
  );
};
