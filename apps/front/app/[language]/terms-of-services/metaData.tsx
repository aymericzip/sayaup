import { Metadata } from "next";
import { mainMetadata } from "../../Head";

export const termsOfServicesMetadata = {
  ...mainMetadata,
  metadataBase: null,
  title: `${process.env.NEXT_PUBLIC_ORGANIZATION_NAME} - Terms of Services`,
  description: "",
  keywords: [
    "Terms of services",
    "Web Development",
    "React",
    "Next.js",
    "SEO",
    "Agency",
  ],
} satisfies Metadata;
