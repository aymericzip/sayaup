"use client";

import React, { useState } from "react";
import { Section } from "../UI/Section";
import { aboutLanguageContent } from "./aboutSectionContent";
import { MaxHeightSmoother } from "@components/UI/MaxHeightSmoother";
import { useContent } from "@i18n/useContent";

interface AboutSectionProps {
  language: string;
}

export const AboutSection = ({ language }: AboutSectionProps) => {
  const [isContentHidded, setIsContentHidded] = useState(true);

  const { content: aboutSectionContent } = useContent(
    language,
    aboutLanguageContent
  );

  return (
    <Section id="about" className="min-h-0">
      <div
        className="flex flex-col items-center justify-center w-[90%] m-auto px-4 py-3 gap-5 cursor-pointer"
        onClick={() =>
          setIsContentHidded((isContentHidded) => !isContentHidded)
        }
      >
        <h3 className="text-drkGray w-full capitalize m-0">
          {aboutSectionContent.title}
        </h3>
        <MaxHeightSmoother isHidden={isContentHidded} minHeight={250}>
          {aboutSectionContent.sections.map((section, index) =>
            section.title ? (
              <div key={index}>
                <h4 className="mt-6">{section.title}</h4>
                <p className="leading-8 mt-3">{section.content}</p>
              </div>
            ) : (
              <p className="leading-8 mt-6" key={index}>
                {section.content}
              </p>
            )
          )}
          <div
            className={`absolute bottom-0 w-full transition  ${
              isContentHidded ? "h-48" : "h-0"
            } bg-gradient-to-t from-white to-[rgba(0,0,0,0)] flex justify-center items-end`}
          >
            <span
              className={`hypertext transition ${
                isContentHidded ? "opacity-1" : "opacity-0"
              }`}
            >
              Display all
            </span>
          </div>
        </MaxHeightSmoother>
      </div>
      {/* <ChatBot /> */}
    </Section>
  );
};
