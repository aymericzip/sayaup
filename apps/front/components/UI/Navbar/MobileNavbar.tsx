"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { SubNavbarProps } from ".";
import { MaxHeightSmoother } from "../MaxHeightSmoother";
import { Burger } from "./Burger";
import { motion } from "framer-motion";

export const MobileNavbar = ({
  sections,
  activeSection,
  setActiveSection,
}: SubNavbarProps) => {
  const router = useRouter();
  const [isUnrolled, setIsUnrolled] = useState<boolean>(false);
  const [isNavHidden, setIsNavHidden] = useState<boolean>(false);

  const onMobileMoove = useCallback(
    (event: globalThis.TouchEvent) => {
      const startY = event.touches[0].clientY;

      const onMove = (event: globalThis.TouchEvent) => {
        if (!isUnrolled) {
          const currentY = event.touches[0].clientY;
          const deltaY = startY - currentY;

          setIsNavHidden(deltaY > 0);

          window.document.body.removeEventListener("touchmove", onMove);
        }
      };

      window.document.body.addEventListener("touchmove", onMove);
    },
    [isUnrolled]
  );

  const onScroll = useCallback(
    (e: WheelEvent) => {
      if (!isUnrolled) {
        setIsNavHidden(e.deltaY > 0);
      }
    },
    [isUnrolled]
  );

  useEffect(() => {
    if (isUnrolled) {
      setIsNavHidden(false);
      window.document.body.classList.add("disable-scroll");
    } else {
      window.document.body.addEventListener("wheel", onScroll);
      window.document.body.addEventListener("touchstart", onMobileMoove);
      window.document.body.classList.remove("disable-scroll");
    }

    return () => {
      window.document.body.removeEventListener("wheel", onScroll);
      window.document.body.removeEventListener("touchstart", onMobileMoove);
    };
  }, [isUnrolled, onScroll, onMobileMoove]);

  let navPosition = isNavHidden ? "-translate-y-full" : "translate-y-0";

  const ulVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const elVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-screen backdrop-blur bg-white shadow-[0_0_10px_-15px_rgba(0,0,0,0.3)] bg-opacity-80 flex flex-col transform transition ${navPosition}`}
    >
      <div className="w-full bg-opacity-80 flex items-center gap-[10vw] px-4 py-3">
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

        <Burger
          isActive={isUnrolled}
          onClick={() => setIsUnrolled(!isUnrolled)}
        />
      </div>

      <MaxHeightSmoother isHidden={!isUnrolled}>
        <motion.ul
          className="h-screen mt-10 mb-5 flex text-lg tracking-wide flex-col text-gray-800"
          role="tablist"
          animate={isUnrolled ? "open" : "closed"}
          onClick={() => setIsUnrolled(false)}
          variants={ulVariants}
        >
          {sections?.map((section) => (
            <motion.li
              key={section.title}
              className="hover:text-black focus:bg-gray-100 cursor-pointer aria-selected:text-primary transition p-3 pl-[5vw]"
              variants={elVariants}
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
            </motion.li>
          ))}
        </motion.ul>
      </MaxHeightSmoother>
    </nav>
  );
};
