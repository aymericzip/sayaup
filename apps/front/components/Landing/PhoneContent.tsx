/* eslint-disable */

import { SwipeDown } from "@assets/icons/SwipeDown";
import { PricingEstimate } from "@components/PricingEstimate";

interface PhoneContentProps {
  language: string;
}

export function PhoneContent({ language }: PhoneContentProps) {
  return (
    <div className="bg-white overflow-auto h-full w-full">
      <div className="h-full w-full mt-36">
        <h2>Design your bespoke project</h2>
        <SwipeDown className="w-20 h-20 m-auto mt-20" />
      </div>
      <PricingEstimate language={language} />
    </div>
  );
}
