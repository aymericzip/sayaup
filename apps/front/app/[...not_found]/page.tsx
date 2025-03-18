import { Inter } from "next/font/google";
import { DiceSection } from "@components/HomeSections/DiceSection";
import { NextPageLanguage } from "@app/layout";
import { ChatButton } from "@components/Footer/ChatButton";
import { Footer } from "@components/Footer";
import Navbar from "@components/UI/Navbar";
import { navbarLanguageContent } from "../[language]/navbarContent";
import { useContent } from "@i18n/useContent";

const inter = Inter({ subsets: ["latin"] });

const NotFoundPage = ({ params: { language } }: NextPageLanguage) => {
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
        className={`${inter.className} flex w-screen flex-col justify-between`}
      >
        <h1 className="hidden">404 - Page not found</h1>
        <div className="w-screen h-[80vh]">
          <span className="absolute top-1/4 left-1/2 md:left-2/3 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-darkGray m-auto flex gap-3 flex-col sm:flex-row-reverse text-center">
            <span className="text-[9rem] absolute left-1/2 -translate-x-1/2 opacity-10">
              404
            </span>
            <span>Page not found</span>
          </span>
          <DiceSection />
        </div>
        <ChatButton />
        <Footer language={language} />
      </main>
    </>
  );
};

export default NotFoundPage;
