import React from "react";
import { Section, SectionType } from "../UI/Section";
import { termsOfServiceLanguageContent } from "./termsOfServiceContent";
import { useContent } from "@i18n/useContent";
import dayjs from "dayjs";
import "dayjs/locale/fr"; // Import the French locale
import "dayjs/locale/es"; // Import the Spanish locale
import "dayjs/locale/de"; // Import the German locale

interface TermsOfServiceProps {
  language: string;
}

export const TermsOfService = ({ language }: TermsOfServiceProps) => {
  const { content: termOfServiceContent } = useContent(
    language,
    termsOfServiceLanguageContent
  );
  dayjs.locale(language);

  return (
    <Section type={SectionType.PRIMARY} id="terms-of-services">
      <h2>{termOfServiceContent.title}</h2>
      <div className="px-6">
        <span>{`${termOfServiceContent.lastUpdatedText} ${dayjs(
          termOfServiceContent.updateTime
        ).format("D MMMM YYYY")}`}</span>
        {termOfServiceContent.sections.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            {section.paragraphs.map((paragraph, index) => (
              <p className="text-justify" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};
