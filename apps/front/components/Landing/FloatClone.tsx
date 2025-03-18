"use client";

import { Suspense } from "react";
import { GroupProps } from "@react-three/fiber";
import { Clone, Float } from "@react-three/drei";

interface FloatProps extends GroupProps {
  object: any;
  intensity?: number;
  rotationIntensity?: number;
  speed?: number;
}

export const FloatClone = ({
  object,
  intensity = 50,
  rotationIntensity = 0.5,
  speed = 1,
  ...props
}: FloatProps) => {
  return (
    <Suspense fallback={null}>
      <Float
        floatIntensity={intensity}
        rotationIntensity={rotationIntensity}
        speed={speed}
      >
        <Clone object={object} {...props} />
      </Float>
    </Suspense>
  );
};
