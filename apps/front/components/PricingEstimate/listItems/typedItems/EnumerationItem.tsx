"use client";

import {
  EnumerationSection,
  SectionChoice,
} from "@components/PricingEstimate/estimateContent";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ItemLayout } from "../ItemLayout";
import { EstimateSectionType, ItemWrapper } from "../ItemWrapper";
import { EstimateContent } from "@components/PricingEstimate/PricingEstimateContext";

interface EnumerationItemProps {
  section: EnumerationSection & EstimateContent;
  setSection: Dispatch<SetStateAction<EstimateSectionType>>;
  level: number;
}

interface Enumeration {
  id: number;
  name: string;
  subsection: SectionChoice[];
}

export const EnumerationItem = ({
  section,
  setSection,
  level,
}: EnumerationItemProps) => {
  const [enumerations, setEnumerations] = useState<Enumeration[]>([
    { id: 1, name: `${section.itemName} 1`, subsection: section.subsection },
  ]);

  return (
    <ItemLayout level={level} section={section}>
      {enumerations.map((enumeration, enumerationIndex) => (
        <ItemLayout level={level} key={enumerationIndex}>
          <div className="mt-5 ml-2 group">
            <div className="">
              <div className="flex justify-between">
                <div>
                  <span
                    contentEditable
                    className="p-3 font-bold"
                    onKeyDown={(e) => {
                      console.log(e.currentTarget?.innerText);

                      if ((e.currentTarget?.innerText?.length ?? 0) > 0)
                        setEnumerations((enumerations) => {
                          enumerations[enumerationIndex].name =
                            e.currentTarget.innerText;
                          return [...enumerations];
                        });
                    }}
                    suppressContentEditableWarning={true}
                  >
                    {enumeration.name}
                  </span>
                  {enumeration.name ===
                    `${section.itemName} ${enumerationIndex + 1}` && (
                    <span className="text-sm text-lightGray"> Change name</span>
                  )}
                </div>
                {enumerations.length > 1 && (
                  <span
                    className="hypertext border px-3 py-1 rounded-md transition opacity-0 group-hover:opacity-100"
                    onClick={() => {
                      setEnumerations((enumerations) => [
                        ...enumerations.filter(
                          (enumerationItem) =>
                            enumeration.id !== enumerationItem.id
                        ),
                      ]);
                    }}
                  >
                    - {section.itemName}
                  </span>
                )}
              </div>
              {enumeration.subsection.map((subsection, index) => (
                <ItemWrapper
                  level={level + 1}
                  section={subsection}
                  key={enumerationIndex + "-" + index}
                />
              ))}
            </div>
          </div>
        </ItemLayout>
      ))}

      <div className="w-full flex justify-center mt-3">
        <span
          className="hypertext border px-3 py-1 rounded-md"
          onClick={() => {
            setEnumerations((enumerations) => [
              ...enumerations,
              {
                id: enumerations.length + 1,
                name: `${section.itemName} ${enumerations.length + 1}`,
                subsection: section.subsection,
              },
            ]);
          }}
        >
          + {section.itemName}
        </span>
      </div>
    </ItemLayout>
  );
};
