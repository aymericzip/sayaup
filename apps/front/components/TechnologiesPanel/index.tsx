import React from "react";
import { TechnologiesList } from "./TechnologiesList";
import { useContent } from "@i18n/useContent";
import { technologiesLanguageContent } from "./technologiesContent";

interface TechnologiesPanelProps {
  language: string;
}

export const TechnologiesPanel = ({ language }: TechnologiesPanelProps) => {
  const { content: technologieContent } = useContent(
    language,
    technologiesLanguageContent
  );

  return (
    <>
      <h3>{technologieContent.title}</h3>
      <TechnologiesList />
    </>
  );
};
