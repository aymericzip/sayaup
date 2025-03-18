import { Inter } from "next/font/google";
import Navbar from "@components/UI/Navbar";
import { navbarLanguageContent } from "../navbarContent";
import { Footer } from "@components/Footer";
import { useContent } from "@i18n/useContent";
import { NextPageLanguage } from "@app/layout";
import { termsOfServicesMetadata } from "./metaData";
import { TermsOfService } from "@components/TermsOfService";

const inter = Inter({ subsets: ["latin"] });

export default function TermsOfServices({
  params: { language },
}: NextPageLanguage) {
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
        <h1 className="hidden">{termsOfServicesMetadata.title}</h1>
        <TermsOfService language={language} />

        <Footer language={language} />
      </main>
    </>
  );
}
