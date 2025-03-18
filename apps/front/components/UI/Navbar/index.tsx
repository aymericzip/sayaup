"use client";

import { useEffect, useState } from "react";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";
import { useDevice } from "../../../utils/useDevice";

interface SectionData {
  id: string;
  offsetTop: number;
  offsetHeight: number;
}

export interface Section {
  title: string;
  url: string;
  id: string;
}

export interface NavbarProps {
  sections: Section[];
  callToAction?: Section;
}

export interface SubNavbarProps {
  sections: Section[];
  callToAction?: Section;
  activeSection: string | null;
  setActiveSection: (activeSection: string | null) => void;
}

export const Navbar = ({ sections, callToAction }: NavbarProps) => {
  const { isMobile } = useDevice();

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const setActiveSectionSection = () => {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll("section");
    const sectionsData: SectionData[] = [];

    sections.forEach((section) => {
      sectionsData.push({
        id: section.id,
        offsetTop: section.offsetTop,
        offsetHeight: section.offsetHeight,
      });
    });

    const activeSectionSection = sectionsData.find((section) => {
      return (
        section.offsetTop <= scrollY + window.screen.height / 4 &&
        section.offsetTop + section.offsetHeight >
          scrollY + window.screen.height / 4
      );
    });

    if (activeSectionSection) {
      setActiveSection(activeSectionSection.id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setActiveSectionSection);

    return () => {
      window.removeEventListener("scroll", setActiveSectionSection);
    };
  });

  return isMobile ? (
    <MobileNavbar
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      sections={sections}
    />
  ) : (
    <DesktopNavbar
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      sections={sections}
      callToAction={callToAction}
    />
  );
};

export default Navbar;
