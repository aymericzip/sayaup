import React from "react";
import { Metadata } from "next";
import { baseMetadata } from "@app/metaData";
import { contentSecurityPolicy } from "@root/contentSecurityPolicy";

export const mainMetadata = {
  ...baseMetadata,
  metadataBase: null,
  title: `${process.env.NEXT_PUBLIC_ORGANIZATION_NAME} - Your custom-made projets`,
  description: "",
  keywords: [
    "Web Development",
    "JavaScript",
    "React",
    "Next.js",
    "SEO",
    "Agency",
  ],
} satisfies Metadata;

export const Head = () => {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={process.env.NEXT_PUBLIC_ORGANIZATION_NAME}
      />
      <meta name="HandheldFriendly" content="true" />
      <meta name="msapplication-TileColor" content="#f9ab97" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={process.env.NEXT_PUBLIC_ORGANIZATION_NAME}
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#f9ab97" />
      <meta name="msapplication-tap-highlight" content="no" />
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      <meta
        httpEquiv="Content-Security-Policy"
        content={contentSecurityPolicy
          .replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, " ")
          .replace(/\s\s+/g, " ")}
      />
    </head>
  );
};
