"use client";

import React, { Suspense, useMemo } from "react";
import { Canvas } from "./Canvas";
import { Scene } from "./Scene";
import { PhoneContent } from "./PhoneContent";
import { Loader } from "@components/UI/Loader";
import { Html, useProgress } from "@react-three/drei";
import Image from "next/image";
import { useDevice } from "../../utils/useDevice";

interface LandingProps {
  language: string;
}

export const Landing = ({ language }: LandingProps) => {
  const phoneContent = useMemo(
    () => <PhoneContent language={language} />,
    [language]
  );
  const { isMobile } = useDevice();

  return (
    <Suspense fallback={<Loader />}>
      {isMobile && (
        <div className="absolute w-full h-full">
          <Image
            src={"/Landing@2-1512x945.png"}
            height={1036}
            width={1579}
            alt="Landing background"
            className="absolute w-full h-full object-cover z-0 "
          />
        </div>
      )}
      <Canvas>
        <Suspense fallback={<DreiLoader />}>
          <Scene phoneContent={phoneContent} />
        </Suspense>
      </Canvas>
    </Suspense>
  );
};

const DreiLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <Loader>{progress} % loaded</Loader>
    </Html>
  );
};
