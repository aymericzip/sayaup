import { Metadata } from "next";
import { mainMetadata } from "../../Head";

export const pricingMetadata = {
  ...mainMetadata,
  metadataBase: null,
  title: `${process.env.NEXT_PUBLIC_ORGANIZATION_NAME} - Pricing`,
  description: "",
  keywords: ["Pricing", "Web Development", "React", "Next.js", "SEO", "Agency"],
} satisfies Metadata;
