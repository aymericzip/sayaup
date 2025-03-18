"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Section } from "./estimateContent";

export interface Pricer {
  minExtraDays: number; // Days to add to the estimate
  maxExtraDays: number; // Days to add to the estimate
  multiplier: number; // Multiplier to apply to the estimate
}

export interface EstimateContent {
  id: string;
  estimate: Record<string, Pricer>;
  subsectionsId?: string;
}

export interface EstimateSection extends EstimateContent, Section {}

export const EstimateContext = createContext<{
  estimateSections: EstimateSection[];
  pushEstimateSection: (section: EstimateSection) => void;
  popEstimateSection: (sectionId: string) => void;
  updateEstimateSection: (section: EstimateSection) => void;
}>({
  estimateSections: [],
  pushEstimateSection: () => {},
  popEstimateSection: () => {},
  updateEstimateSection: () => {},
});

interface EstimateContextProps {
  children: ReactNode;
}

export const PricingEstimateContext = ({ children }: EstimateContextProps) => {
  const [estimateSections, setEstimateSections] = useState<EstimateSection[]>(
    []
  );

  const pushEstimateSection = (section: EstimateSection) => {
    setEstimateSections((prev) => [...prev, section]);
  };

  const popEstimateSection = (sectionId: string) => {
    //   setEstimateSections((prev) => prev.filter((item) => item.id !== sectionId));
  };

  const updateEstimateSection = (section: EstimateSection) => {
    //   setEstimateSections((prev) => {
    //     const index = prev.findIndex((item) => item.id === section.id);
    //     if (index === -1) {
    //       return prev;
    //     }
    //     const newSection = { ...prev[index], ...section };
    //     const newSections = [
    //       ...prev.slice(0, index),
    //       newSection,
    //       ...prev.slice(index + 1),
    //     ];
    //     return newSections;
    //   });
  };

  return (
    <EstimateContext.Provider
      value={{
        estimateSections,
        pushEstimateSection,
        popEstimateSection,
        updateEstimateSection,
      }}
    >
      {children}
    </EstimateContext.Provider>
  );
};
