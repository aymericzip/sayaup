import { Language, getOptions } from "./settings";
import { createInstance } from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { cache } from "react";

const i18nInstance = createInstance();

const i18nRef: () => { current: typeof i18n } = cache(() => {
  return { current: i18nInstance };
});

export const initI18next = async (lng?: Language | string, ns?: string) => {
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string | Language, namespace: string) => {
        if (namespace)
          return import(`./dictionaries/${namespace}/${language}.json`);
        else return import(`./dictionaries/${language}.json`);
      })
    )
    .init(getOptions(lng, ns));

  i18nRef().current = i18nInstance;

  return i18nInstance;
};

export const getI18next = cache(() => i18nRef().current);
