import React from "react";
import Image from "next/image";

import awsLogo from "@assets/technologies/aws-logo.svg";
import dockerLogo from "@assets/technologies/docker-logo.svg";
import firebaseLogo from "@assets/technologies/firebase-logo.svg";
import flutterLogo from "@assets/technologies/flutter.svg";
import gcpLogo from "@assets/technologies/gcp-logo.svg";
import analyticsLogo from "@assets/technologies/google-analytics-logo.svg";
import kubernetesLogo from "@assets/technologies/kubernetes-logo.svg";
import nextjsLogo from "@assets/technologies/nextjs-logo.svg";
import nodejsLogo from "@assets/technologies/nodejs-logo.svg";
import reactLogo from "@assets/technologies/react-logo.svg";
import terraformLogo from "@assets/technologies/terraform-logo.svg";
import Link from "next/link";

interface LogoElement {
  logo: any;
  title: string;
  href: string;
}

const logos: LogoElement[] = [
  { logo: reactLogo, title: "React", href: "https://react.dev/" },
  {
    logo: firebaseLogo,
    title: "Firebase",
    href: "https://firebase.google.com/",
  },
  { logo: flutterLogo, title: "Flutter", href: "https://flutter.dev/" },
  {
    logo: analyticsLogo,
    title: "Google Analytics",
    href: "https://analytics.google.com/analytics/web/",
  },
  { logo: nextjsLogo, title: "Nextjs", href: "https://nextjs.org/" },
  { logo: nodejsLogo, title: "Nodejs", href: "https://nodejs.org/en" },
  { logo: dockerLogo, title: "Docker", href: "https://www.docker.com/" },
  { logo: kubernetesLogo, title: "Kubernetes", href: "https://kubernetes.io/" },
  {
    logo: terraformLogo,
    title: "Terraform",
    href: "https://www.terraform.io/",
  },
  {
    logo: awsLogo,
    title: "Amazon Web Services",
    href: "https://aws.amazon.com/",
  },
  {
    logo: gcpLogo,
    title: "Google Cloud Plateform",
    href: "https://cloud.google.com/",
  },
];

export const TechnologiesList = () => {
  return (
    <div className="p-5 flex flex-row gap-x-16 gap-y-6 justify-evenly flex-wrap">
      {logos.map((logoEl, index) => (
        <Link
          key={index}
          href={logoEl.href}
          className="group h-[50px] w-[50px] min-w-[10%] flex items-center m-auto flex-col"
        >
          <Image
            src={logoEl.logo}
            alt={logoEl.title}
            className="max-h-[50px] max-w-[50px] grayscale hover:grayscale-0 transition cursor-pointer"
          />
          <span className="group-hover:opacity-100 transition opacity-0 text-darkGray text-[12px] mt-2 text-center uppercase w-[100px] font-bold	">
            {logoEl.title}
          </span>
        </Link>
      ))}
    </div>
  );
};
