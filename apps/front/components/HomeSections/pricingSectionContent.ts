import { LanguageContent } from "@i18n/useContent";

interface Content {
  title: string;
}

export const pricingLanguageContent: LanguageContent<Content> = {
  en: {
    title: "Pricing",
  },
  es: {
    title: "Precios",
  },
  fr: {
    title: "Tarifs",
  },
  de: {
    title: "Preisgestaltung",
  },
};
