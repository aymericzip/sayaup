import { PricingSection } from "@components/HomeSections/PricingSection";
import React from "react";
import { Inter } from "next/font/google";
import { pricingMetadata } from "./metaData";
import Navbar from "@components/UI/Navbar";
import { Footer } from "@components/Footer";
import { useContent } from "@i18n/useContent";
import { navbarLanguageContent } from "../navbarContent";
import { NextPageLanguage } from "@app/layout";

const inter = Inter({ subsets: ["latin"] });

export default function PricingPage({
  params: { language },
}: NextPageLanguage) {
  const { content: navbarContent } = useContent(
    language,
    navbarLanguageContent
  );

  return (
    <>
      <Navbar sections={navbarContent.sections} />

      <main
        className={`${inter.className} flex min-h-screen w-screen flex-col justify-between`}
      >
        <h1 className="hidden">{pricingMetadata.title}</h1>
        <PricingSection language={language} />
        <Footer language={language} />
      </main>
    </>
  );
}
