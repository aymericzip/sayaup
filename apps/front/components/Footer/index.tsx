import Link from "next/link";
import React from "react";
import { ChatButton } from "./ChatButton";

interface FooterProps {
  language: string;
}

export const Footer = ({ language }: FooterProps) => {
  return (
    <>
      <footer>
        <div className="flex flex-row justify-evenly p-6 w-full md:w-1/2 m-auto">
          <div className="flex flex-col mx-auto gap-1">
            <h5>Services</h5>
            <Link href="/pricing" className="text-xs">
              Online estimation
            </Link>
            <span className="hypertext text-xs">Chat with us</span>
          </div>
          <div className="flex flex-col mx-auto gap-1">
            <h5>Lean more</h5>
            <Link href="/terms_of_services" className="text-xs">
              Terms of service
            </Link>
            <Link href="/privacy_notice" className="text-xs">
              Privacy Notice
            </Link>
            <Link href="https://www.linkedin.com/" className="text-xs">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
      <ChatButton />
    </>
  );
};
