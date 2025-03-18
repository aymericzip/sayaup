import { LanguageContent } from "@i18n/useContent";

interface Content {
  title: string;
}

export const technologiesLanguageContent: LanguageContent<Content> = {
  en: {
    title: "Our technologies",
  },
  es: {
    title: "Nuestras tecnologías",
  },
  fr: {
    title: "Nos technologies",
  },
  de: {
    title: "Unsere Technologien",
  },
};
