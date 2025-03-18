import { Metadata } from "next";
import { mainMetadata } from "../../Head";

export const privacyPolicyMetadata = {
  ...mainMetadata,
  metadataBase: null,
  title: `${process.env.NEXT_PUBLIC_ORGANIZATION_NAME} - Privacy Policy`,
  description: "",
  keywords: [
    "Pricacy policy",
    "Web Development",
    "React",
    "Next.js",
    "SEO",
    "Agency",
  ],
} satisfies Metadata;
