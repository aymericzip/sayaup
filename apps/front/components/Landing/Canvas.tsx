"use client";

import { HTMLAttributes, MutableRefObject, ReactNode, useRef } from "react";
import { Canvas as FiberCanvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";

interface CanvasProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Canvas({ children, ...props }: CanvasProps) {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className="absolute w-full h-full m-0 p-0" {...props}>
      {/* Container for THREEJS */}
      <FiberCanvas
        shadows
        flat={false}
        linear
        // Since the canvas will receive events from the out-most container it must ignore events
        // This will allow the HTML view underneath to receive events, too
        className="absolute inset-0 m-0 p-0 z-10"
        // Re-connect r3f to a shared container, this allows both worlds (html & canvas) to receive events
        eventSource={container as MutableRefObject<HTMLDivElement>}
        // Re-define the event-compute function which now uses pageX/Y instead of offsetX/Y
        // Without this the right hand would reset to client 0/0 if it hovers over any of the HTML elements
        eventPrefix="page"
      >
        <directionalLight
          castShadow
          intensity={0.4}
          position={[-10, 50, 300]}
          shadow-mapSize={[512, 512]}
          shadow-bias={-0.002}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[-2000, 2000, 2000, -2000, -10000, 10000]}
          />
        </directionalLight>
        <OrthographicCamera
          makeDefault={true}
          far={50000}
          near={-50000}
          position={[0, 0, 0]}
        />
        <hemisphereLight intensity={0.5} color="#eaeaea" />
        {children}
      </FiberCanvas>
    </div>
  );
}
