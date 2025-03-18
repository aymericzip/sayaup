import React from "react";
import { Section, SectionType } from "../UI/Section";
import { servicesLanguageContent } from "./servicesSectionContent";
import { ServicesPanel } from "@components/ServicesPanel";
import { TechnologiesPanel } from "@components/TechnologiesPanel";
import { useContent } from "@i18n/useContent";

interface ServicesSectionProps {
  language: string;
}

export const ServicesSection = ({ language }: ServicesSectionProps) => {
  const { content: servicesContent } = useContent(
    language,
    servicesLanguageContent
  );
  return (
    <Section type={SectionType.PRIMARY} id="services">
      <h2>{servicesContent.title}</h2>
      <ServicesPanel language={language} />
      <TechnologiesPanel language={language} />
    </Section>
  );
};
