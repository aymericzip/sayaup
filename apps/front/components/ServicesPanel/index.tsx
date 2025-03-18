"use client";

import React, { useEffect, useState } from "react";
import { servicesLanguageContent } from "./servicesContent";
import { useDevice } from "@root/utils/useDevice";
import { HorizintalSubsection } from "@components/HomeSections/SubsectionItem/HorizintalSubsection";
import { VerticalSubsection } from "@components/HomeSections/SubsectionItem/VerticalSubsection";
import { useContent } from "@i18n/useContent";

interface ServicesPanelProps {
  language: string;
}

export const ServicesPanel = ({ language }: ServicesPanelProps) => {
  const [unrolledSection, setUnrolledSection] = useState<null | number>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const { isMobile } = useDevice();

  const { content: servicesContent } = useContent(
    language,
    servicesLanguageContent
  );

  useEffect(() => {
    if (!isClicked && !isMobile && !isOver) {
      const timer = setTimeout(() => {
        if (unrolledSection === null) {
          const selectedSection = Math.floor(
            Math.random() * servicesContent.service.length
          );
          setUnrolledSection(selectedSection);
        } else if (unrolledSection >= servicesContent.service.length - 1) {
          setUnrolledSection(0);
        } else {
          setUnrolledSection((unrolledSection) => (unrolledSection ?? 0) + 1);
        }

        clearTimeout(timer);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [unrolledSection, isClicked, isOver, isMobile, servicesContent]);

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setUnrolledSection(0);

        clearTimeout(timer);
      }, 7000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isMobile]);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col gap-3 m-auto w-[80vw] items-center justify-center mt-8">
          {servicesContent.service.map((service, index) => (
            <VerticalSubsection
              isHidden={unrolledSection !== index}
              title={service.title}
              onClick={() => {
                if (unrolledSection === index) {
                  setUnrolledSection(null);
                } else {
                  setUnrolledSection(index);
                }
              }}
              key={index}
            >
              <div className="w-full p-4 flex flex-col gap-2 py-4 items-center text-slate-600 max-h-[400px] overflow-auto">
                {service.children.map((children, index) => (
                  <p key={index}>{children}</p>
                ))}
              </div>
            </VerticalSubsection>
          ))}
        </div>
      ) : (
        <div
          className="flex flex-row gap-1 lg:gap-3 m-auto w-full h-[60vh] items-center justify-center mt-8"
          onMouseLeave={() => setIsOver(false)}
        >
          {servicesContent.service.map((service, index) => (
            <HorizintalSubsection
              isHidden={unrolledSection !== index}
              isfocused={isClicked && unrolledSection === index}
              title={service.title}
              onClick={() => {
                if (unrolledSection === index && (isClicked || !isOver)) {
                  setUnrolledSection(null);
                  setIsClicked(false);
                } else {
                  setUnrolledSection(index);
                  setIsClicked(true);
                }
              }}
              onMouseEnter={() => {
                if (!isClicked) {
                  setUnrolledSection(index);
                  setIsOver(true);
                }
              }}
              key={index}
            >
              <div className="w-[40vh] h-full  flex flex-col items-center justify-center text-slate-600">
                <div className="w-full p-4 gap-2">
                  {service.children.map((children, index) => (
                    <p key={index} className="py-3">
                      {children}
                    </p>
                  ))}
                </div>
              </div>
            </HorizintalSubsection>
          ))}
        </div>
      )}
    </>
  );
};
