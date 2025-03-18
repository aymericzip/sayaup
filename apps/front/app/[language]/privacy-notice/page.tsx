import { Inter } from "next/font/google";
import Navbar from "@components/UI/Navbar";
import { navbarLanguageContent } from "../navbarContent";
import { Footer } from "@components/Footer";
import { useContent } from "@i18n/useContent";
import { NextPageLanguage } from "@app/layout";
import { privacyPolicyMetadata } from "./metaData";
import { PrivacyNotice } from "@components/PrivacyNotice";

const inter = Inter({ subsets: ["latin"] });

export default function PrivacyPolicy({
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
        <h1 className="hidden">{privacyPolicyMetadata.title}</h1>
        <PrivacyNotice language={language} />

        <Footer language={language} />
      </main>
    </>
  );
}
