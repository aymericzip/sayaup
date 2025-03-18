"use client";

import { useContext } from "react";
import { EstimateContext, EstimateSection } from "./PricingEstimateContext";
import { SectionChoice, SubsectionType } from "./estimateContent";

export const useEstimate = () => {
  const {
    estimateSections,
    pushEstimateSection,
    popEstimateSection,
    updateEstimateSection,
  } = useContext(EstimateContext);

  const buildEstimateServicies = (services: SectionChoice[]) => {
    services.forEach((service) => {
      switch (service.type) {
        case SubsectionType.DEFAULT || undefined:

        case SubsectionType.CHOICE_LIST:

        case SubsectionType.BOOLEAN:

        case SubsectionType.QUANTITY:

        case SubsectionType.SCALE:

        case SubsectionType.ENUMERATION:

        default:
      }
    });
  };
  return {};
};
