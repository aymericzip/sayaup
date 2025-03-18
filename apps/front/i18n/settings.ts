export const defaultNS = "translation";

export enum Language {
  ENGLISH = "en",
  GERMAN = "de",
  FRENCH = "fr",
  SPANISH = "es",
  // Add your Languages here
}

export const defaultLanguage = Language.ENGLISH as Language;

// Available languages in the app
export const languages: Language[] = [
  Language.ENGLISH,
  Language.SPANISH,
  Language.FRENCH,
  Language.GERMAN,

  // Add your Languages here
];

export type ValidLanguage = (typeof languages)[number];

type PathnameLanguage = {
  pathname: string;
  language?: never;
};
type ISOLanguage = {
  pathname?: never;
  language: Language | string;
};

type LanguageSource = PathnameLanguage | ISOLanguage;

export const getOptions = (
  lng: Language | string = defaultLanguage,
  ns = ""
) => {
  return {
    supportedLngs: languages,
    fallbackLng: defaultLanguage,
    lng,
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    debug: false,
    ns,
  };
};

export const getlanguagePathFrom = ({ pathname, language }: LanguageSource) => {
  if (language) {
    const languageParts = language.toLowerCase().split("-");
    return languageParts[1];
  } else {
    const pathnameParts = pathname!.toLowerCase().split("/");
    return pathnameParts[1];
  }
};
