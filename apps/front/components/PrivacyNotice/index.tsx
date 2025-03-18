import React from "react";
import { Section, SectionType } from "../UI/Section";
import { privacyNoticeLanguageContent } from "./privacyNoticeContent";
import { useContent } from "@i18n/useContent";
import dayjs from "dayjs";
import "dayjs/locale/fr"; // Import the French locale
import "dayjs/locale/es"; // Import the Spanish locale
import "dayjs/locale/de"; // Import the German locale

interface PrivacyNoticeProps {
  language: string;
}

export const PrivacyNotice = ({ language }: PrivacyNoticeProps) => {
  const { content: privacyNoticeContent } = useContent(
    language,
    privacyNoticeLanguageContent
  );

  dayjs.locale(language);

  return (
    <Section type={SectionType.PRIMARY} id="privacy-notice">
      <h2>{privacyNoticeContent.title}</h2>
      <div className="px-6">
        <span>{`${privacyNoticeContent.lastUpdatedText} ${dayjs(
          privacyNoticeContent.updateTime
        ).format("D MMMM YYYY")}`}</span>
        {privacyNoticeContent.sections.map((section, index) => (
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
