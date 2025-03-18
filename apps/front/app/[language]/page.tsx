import { Inter } from "next/font/google";
import { mainMetadata } from "../Head";
import { LandingSection } from "@components//HomeSections/LandingSection";
import { AboutSection } from "@components//HomeSections/AboutSection";
import { ServicesSection } from "@components//HomeSections/ServicesSection";
import Navbar from "@components/UI/Navbar";
import { Footer } from "@components/Footer";
import { navbarLanguageContent } from "./navbarContent";
import { NextPageLanguage } from "@app/layout";
import { useContent } from "@i18n/useContent";
import { DiceSection } from "@components/HomeSections/DiceSection";
// import { TestimonialsSection } from "@components/HomeSections/TestimonialsSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ params: { language } }: NextPageLanguage) {
  const { content: navbarContent } = useContent(
    language,
    navbarLanguageContent
  );

  return (
    <>
      <Navbar
        sections={navbarContent.sections}
        callToAction={navbarContent.callToAction}
      />

      <main
        className={`${inter.className} flex min-h-screen w-screen flex-col justify-between`}
      >
        <h1 className="hidden">{mainMetadata.title}</h1>
        <LandingSection language={language} />
        <AboutSection language={language} />
        <DiceSection />
        <ServicesSection language={language} />
        {/* <TestimonialsSection language={language} /> */}
        <Footer language={language} />
      </main>
    </>
  );
}
