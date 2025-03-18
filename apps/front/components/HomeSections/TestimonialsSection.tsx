import { Section, SectionType } from "@components/UI/Section";
import React from "react";
import { testimonialsLanguageContent } from "./testimonialsSectionContent";
import { useContent } from "@i18n/useContent";

interface TestimonialsSectionProps {
  language: string;
}

export const TestimonialsSection = ({ language }: TestimonialsSectionProps) => {
  const { content: servicesContent } = useContent(
    language,
    testimonialsLanguageContent
  );

  return (
    <Section type={SectionType.SECONDARY} id="testimonials">
      <h2>{servicesContent.title}</h2>
    </Section>
  );
};
