"use client";

import React, { ReactNode, createContext } from "react";
import { Language, defaultLanguage } from "./settings";

interface LanguageContextProps {
  language: Language;
  children: ReactNode;
}

interface LanguageContextValue {
  language: Language;
}

export const LanguageClientContext = createContext<LanguageContextValue>({
  language: Language.ENGLISH,
});

export const LanguageContextProvider = ({
  language = defaultLanguage,
  children,
}: LanguageContextProps) => {
  return (
    <LanguageClientContext.Provider
      value={{
        language,
      }}
    >
      {children}
    </LanguageClientContext.Provider>
  );
};
