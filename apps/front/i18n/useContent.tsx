import { useCallback } from "react";
import { Language, defaultLanguage } from "./settings";

export type LanguageContent<Content> = Record<Language, Content>;

type ContentResult<Param> = Param extends LanguageContent<infer Content>
  ? Content
  : never;

export const useContent = <
  Content,
  Param extends LanguageContent<Content> | undefined
>(
  language: Language | string,
  languageContent?: Param
) => {
  const currentLanguage = language;

  const getContent = useCallback(
    (languageContent: LanguageContent<Content>) =>
      languageContent[
        (language as Language) ?? currentLanguage ?? defaultLanguage
      ],
    [languageContent, currentLanguage]
  );

  const content = (languageContent &&
    getContent(languageContent)) as ContentResult<Param>;

  return {
    language,
    content,
    getContent,
  };
};
