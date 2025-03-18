import { Metadata } from "next";
import {
  ColorSchemeEnum,
  Icons,
  ThemeColorDescriptor,
} from "next/dist/lib/metadata/types/metadata-types";
import { AlternateURLs } from "next/dist/lib/metadata/types/alternative-urls-types";
import { Language, languages } from "@i18n/settings";

export const baseMetadata = {
  metadataBase: null,
  title: `${process.env.NEXT_PUBLIC_ORGANIZATION_NAME} - Your custom-made projets`,
  description:
    "Discover SayaUp, a leading digital agency specialising in NextJS web development, SEO optimisation, and GreenIT. Helping startups and small businesses grow.",

  applicationName:
    "Our compagny - " + process.env.NEXT_PUBLIC_ORGANIZATION_NAME,
  authors: [
    {
      name: process.env.NEXT_PUBLIC_ORGANIZATION_NAME,
      url: process.env.NEXT_PUBLIC_URL,
    },
    { name: "Aymeric PINEAU", url: "https://github.com/aypineau" },
  ],
  generator: undefined,
  keywords: [
    "Web Development",
    "JavaScript",
    "React",
    "Next.js",
    "SEO",
    "Agency",
  ],
  referrer: "origin",
  themeColor: [
    {
      color: "#f9ab97",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "#f9ab97",
      media: "(prefers-color-scheme: dark)",
    },
  ] satisfies ThemeColorDescriptor[],
  colorScheme: "light dark" satisfies ColorSchemeEnum,
  viewport: {
    width: 1,
    height: "device-height",
    initialScale: 0.7,
    // minimumScale: 3,
    // maximumScale: 3,
    // userScalable: true,
    // viewportFit: "auto",
    // interactiveWidget: undefined,
  } satisfies Metadata["viewport"],
  creator: "Aymeric PINEAU",
  publisher: "/",
  robots: "index, follow",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL,
    languages: (languages as string[]).reduce(
      (acc, lang) => `${process.env.NEXT_PUBLIC_URL}/${lang}`,
      {}
    ),
  } satisfies AlternateURLs,
  icons: {
    icon: [{ url: "/assets/favicon.ico", type: "image/x-icon" }],
    shortcut: ["/assets/Dice-logo.png"],
    apple: [
      {
        url: "/assets/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [],
  } satisfies Icons,
  manifest: `${process.env.NEXT_PUBLIC_URL}/manifest.json`,
  openGraph: undefined,
  twitter: null,
  verification: undefined,
  appleWebApp: null,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  itunes: null,
  abstract: null,
  appLinks: null,
  archives: null,
  assets: null,
  bookmarks: null,
  category: null,
  classification: null,
  other: undefined,
} satisfies Metadata;
