import { Section } from "@components/UI/Navbar";
import { LanguageContent } from "@i18n/useContent";

interface Content {
  title: string;
  sections: Section[];
  callToAction?: Section;
}

export const navbarLanguageContent: LanguageContent<Content> = {
  en: {
    title: "",
    sections: [
      {
        id: "about",
        title: "About",
        url: "/en",
      },
      {
        id: "services",
        title: "Services",
        url: "/en",
      },
      {
        id: "pricing",
        title: "Pricing",
        url: "/en/pricing",
      },
    ],
    callToAction: {
      id: "pricing",
      title: "Online estimate",
      url: "/en/pricing",
    },
  },
  fr: {
    title: "",
    sections: [
      {
        id: "about",
        title: "A propos",
        url: "/fr",
      },
      {
        id: "services",
        title: "Services",
        url: "/fr",
      },
      {
        id: "pricing",
        title: "Tarifs",
        url: "/fr/pricing",
      },
    ],
    callToAction: {
      id: "pricing",
      title: "Estimation en ligne",
      url: "/en/pricing",
    },
  },
  es: {
    title: "",
    sections: [
      {
        id: "about",
        title: "Acerca de",
        url: "/es",
      },
      {
        id: "services",
        title: "Servicios",
        url: "/es",
      },
      {
        id: "pricing",
        title: "Precios",
        url: "/es/pricing",
      },
    ],
    callToAction: {
      id: "pricing",
      title: "Online estimate",
      url: "/en/pricing",
    },
  },
  de: {
    title: "",
    sections: [
      {
        id: "about",
        title: "Over",
        url: "/de",
      },
      {
        id: "services",
        title: "Diensten",
        url: "/de",
      },
      {
        id: "pricing",
        title: "Pricing",
        url: "/de/pricing",
      },
    ],
    callToAction: {
      id: "pricing",
      title: "Online estimate",
      url: "/en/pricing",
    },
  },
};
