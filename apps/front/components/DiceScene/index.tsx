"use client";

import React, { Suspense } from "react";
import { Scene } from "./Scene";
import { Loader } from "@components/UI/Loader";
import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "./Canvas";

interface DiceSceneProps {}

export const DiceScene = ({}: DiceSceneProps) => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas>
        <Suspense fallback={<DreiLoader />}>
          <Scene />
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
