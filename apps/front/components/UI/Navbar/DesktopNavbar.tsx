"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { SubNavbarProps } from ".";

export const DesktopNavbar = ({
  sections,
  callToAction,
  activeSection,
  setActiveSection,
}: SubNavbarProps) => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 w-screen px-4 py-3 backdrop-blur bg-white shadow-[0_0_10px_-15px_rgba(0,0,0,0.3)] bg-opacity-80 flex items-center gap-[10vw]">
      <span
        className="text-3xl font-bold tracking-wider cursor-pointer"
        onClick={() => {
          setActiveSection(null);

          if (window.location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            router.push("/");
          }
        }}
      >
        Saya
        <span className="text-primary">UP</span>
      </span>
      <ul
        className="flex gap-6 text-lg tracking-wide flex-row text-gray-800"
        role="tablist"
      >
        {sections?.map((section) => (
          <li
            key={section.title}
            className="hover:text-black cursor-pointer aria-selected:text-primary transition align-middle whitespace-nowrap"
            aria-selected={activeSection === section.id}
            role="tab"
            onClick={() => {
              setActiveSection(section.id);

              if (window.location.pathname === section.url) {
                const sectionEl = document.getElementById(section.id);

                if (sectionEl) {
                  sectionEl.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                  });
                }
              } else {
                router.push(`${section.url}#${section.id}`);
              }
            }}
          >
            {section.title}
          </li>
        ))}
      </ul>
      {callToAction && (
        <button
          className="ml-auto bg-drkGray"
          onClick={() => {
            router.push(`${callToAction.url}#${callToAction.id}`);
          }}
        >
          {callToAction?.title}
        </button>
      )}
    </nav>
  );
};
