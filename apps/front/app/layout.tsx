import { ReactNode } from "react";
import { Metadata } from "next";
import "@app/globals.css";
import { Head, mainMetadata } from "./Head";
import { Language, languages } from "@i18n/settings";
import { initI18next } from "@i18n/index";

export type NextPageLanguage = {
  params: { language: string };
};

export type RootLayoutProps = {
  children: ReactNode;
  params: { language: string };
};

export const metadata: Metadata = mainMetadata;

export async function generateStaticParams() {
  return languages.map((language) => ({ language }));
}

export default async function RootLayout({
  children,
  params: { language },
}: RootLayoutProps) {
  const i18Next = await initI18next(language as Language);

  return (
    <html lang={language} dir={i18Next.dir()}>
      <Head />

      <body>{children}</body>
    </html>
  );
}
