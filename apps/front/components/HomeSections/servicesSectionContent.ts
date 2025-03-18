import { LanguageContent } from "@i18n/useContent";

interface Content {
  title: string;
}

export const servicesLanguageContent: LanguageContent<Content> = {
  en: {
    title: "Services",
  },
  es: {
    title: "Servicios",
  },
  fr: {
    title: "Services",
  },
  de: {
    title: "Dienstleistungen",
  },
};
