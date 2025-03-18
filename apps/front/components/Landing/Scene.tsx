// @ts-nocheck

"use client";

import { Vector3, MathUtils } from "three";
import { ReactNode, useLayoutEffect } from "react";
import { GroupProps, useFrame } from "@react-three/fiber";
import { Html, Mask, useMask, Clone, Float } from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import { FloatClone } from "./FloatClone";
import { useDevice } from "../../utils/useDevice";

interface SceneProps extends GroupProps {
  phoneContent: ReactNode;
}

export function Scene({ phoneContent, ...props }: SceneProps) {
  const { nodes } = useSpline("objects/landing.splinecode");

  const v = new Vector3();
  const { isMobile } = useDevice();

  // Take the stencil and drop it over everything but the right hand
  const stencil = useMask(1, true);
  useLayoutEffect(() => {
    Object.values(nodes)
      .filter((node) => node.material)
      .filter((node) => node.name !== "Blob1") // filter the element that should not be masked by the stencil
      .filter((node) => node.name !== "Blob2") // filter the element that should not be masked by the stencil
      .filter((node) => node.name !== "Blob3") // filter the element that should not be masked by the stencil
      .filter((node) => node.name !== "FrontCamera") // filter the element that should not be masked by the stencil
      .forEach((node) => Object.assign(node.material, stencil));
  }, [nodes, stencil]);

  useFrame((state) => {
    v.copy(new Vector3(state.pointer.x, state.pointer.y, 0));
    v.unproject(state.camera);

    state.camera.zoom = MathUtils.lerp(state.camera.zoom, 0.7, 0.15);

    if (!isMobile) {
      // Update the camera position based on the mouse position for desktop only
      state.camera.position.lerp(
        new Vector3(-state.pointer.x * 400, -state.pointer.y * 200, 1000),
        0.1
      );
    }

    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return (
    <group {...props} dispose={null}>
      {/* Goup Blob for optimisation */}
      {!isMobile && (
        <>
          <FloatClone object={[nodes.Blob10, nodes.Blob2, nodes.Blob5]} />
          <FloatClone object={[nodes.Blob1, nodes.Blob4, nodes.Blob7]} />
          <FloatClone object={[nodes.Blob8, nodes.Blob11, nodes.Blob3]} />
          <FloatClone object={[nodes.Blob6, nodes.Blob9, nodes.Blob12]} />
          <FloatClone object={[nodes.Heart, nodes.Highvoltage, nodes.Book]} />
          <FloatClone object={[nodes.Blob13, nodes.Planets]} />
        </>
      )}

      <Float floatIntensity={50} rotationIntensity={1} speed={1}>
        <group name="phone">
          <Clone object={nodes.Phone} />

          {/* Mask is a drei component that generates a stencil, we use the phone-screen as a mask, punching a hole into the canvas */}
          {nodes.Screen && (
            <Mask
              id={1}
              colorWrite={false}
              depthWrite={false}
              castShadow={true}
              receiveShadow={true}
              rotation={nodes.Screen.rotation}
              geometry={nodes.Screen.geometry}
              scale={1.45}
              position={[-72, 172, -18]}
            >
              {/* We can drop the HTML inside, make it a 3d-transform and portal it to the dom container above */}
              <Html
                className="relative rounded-[35px] w-[375px] h-[825px] overflow-scroll z-20 "
                scale={26}
                transform={true}
                zIndexRange={[-1, 0]}
                receiveShadow={true}
              >
                {phoneContent}
              </Html>
            </Mask>
          )}
        </group>
      </Float>

      <Html>
        <div className="w-screen transform -translate-x-1/2 translate-y-[50vh]">
          <span className="slogan absolute bottom-14 left-1/2 transform -translate-x-1/2 font-bold tracking-wider text-white md:text-[10rem] z-20">
            Saya
            <span className="text-secondary font-extrabold">UP</span>
          </span>
        </div>
      </Html>
    </group>
  );
}
